import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Play, ExternalLink, AlertTriangle } from "lucide-react";

/* -------------------- */
/*     TypeScript Types */
/* -------------------- */

// Thumbnail object
interface YoutubeThumbnail {
    url: string;
    width: number;
    height: number;
}

// Snippet
interface YoutubeSnippet {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails?: {
        default?: YoutubeThumbnail;
        medium?: YoutubeThumbnail;
        high?: YoutubeThumbnail;
    };
}

// Playlist object
export interface YoutubePlaylist {
    id: string;
    snippet: YoutubeSnippet;
}

// Video object inside playlistItems
export interface YoutubePlaylistVideo {
    id: string;
    snippet: YoutubeSnippet;
    contentDetails: {
        videoId: string;
    };
}

// Generic API response
interface YoutubeApiResponse<T> {
    items: T[];
}

// Active playlist type
interface ActivePlaylist {
    id: string;
    title: string;
}

/* -------------------- */
/*     Component Code   */
/* -------------------- */

const BASE64_KEY: string = "QUl6YVN5RENZbXZqVFJLdXBwWGtWWkVLNndmVW9lSzcyX2ZKdkZR";
const API_KEY = atob(BASE64_KEY);
const CHANNEL_ID = "UCioZXW3oASlPs3WsWPtRgMA";
const UPLOADS_PLAYLIST_ID = "UUioZXW3oASlPs3WsWPtRgMA";

// Promotional video of the beit midrash — featured first in the default "all" view.
// It's a restricted video (absent from the Data API), so we pull its public title +
// thumbnail from YouTube oEmbed (CORS-enabled) and gracefully fall back if it fails.
const PROMO_VIDEO_ID = "hXWlW-uc4K4";
const SPOTIFY_SHOW_URL = "https://open.spotify.com/show/7rkki13c4wbB0fYaFpsLjg";

const fetchPromoVideo = async (): Promise<YoutubePlaylistVideo | null> => {
    try {
        const res = await fetch(
            `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${PROMO_VIDEO_ID}&format=json`
        );
        if (!res.ok) return null;
        const data: { title: string; thumbnail_url: string } = await res.json();
        return {
            id: `promo-${PROMO_VIDEO_ID}`,
            contentDetails: { videoId: PROMO_VIDEO_ID },
            snippet: {
                title: data.title,
                description: "",
                publishedAt: new Date().toISOString(),
                thumbnails: {
                    medium: { url: data.thumbnail_url, width: 480, height: 360 },
                },
            },
        };
    } catch {
        return null;
    }
};

export default function VideosSection() {
    const [videos, setVideos] = useState<YoutubePlaylistVideo[]>([]);
    const [playlists, setPlaylists] = useState<YoutubePlaylist[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<YoutubePlaylistVideo | null>(null);
    const [activePlaylist, setActivePlaylist] = useState<ActivePlaylist>({
        id: UPLOADS_PLAYLIST_ID,
        title: "הכל",
    });

    const [videosLoading, setVideosLoading] = useState<boolean>(true);
    const [videosError, setVideosError] = useState<string | null>(null);

    const fetchApi = async <T,>(url: string): Promise<T> => {
        const response = await fetch(url);
        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.error?.message || "API error");
        }
        return response.json();
    };

    /* ----------------------------- */
    /*   Fetch playlists on mount    */
    /* ----------------------------- */
    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const playlistsUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&key=${API_KEY}`;

                const data = await fetchApi<YoutubeApiResponse<YoutubePlaylist>>(playlistsUrl);
                setPlaylists(data.items || []);
            } catch (err) {
                console.error("Failed to fetch playlists:", err);
            }
        };

        fetchPlaylists();
    }, []);

    /* ----------------------------- */
    /*   Fetch videos for playlist   */
    /* ----------------------------- */
    useEffect(() => {
        const fetchVideos = async () => {
            setVideosLoading(true);
            setVideosError(null);
            setSelectedVideo(null);
            setVideos([]);

            try {
                const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${activePlaylist.id}&maxResults=10&key=${API_KEY}`;

                const data = await fetchApi<YoutubeApiResponse<YoutubePlaylistVideo>>(videosUrl);

                const validVideos = data.items.filter(
                    (v) => v.snippet?.thumbnails?.medium
                );

                let finalVideos = validVideos;

                // Feature the promo video first — only on the default "all uploads" view,
                // never when a specific playlist is selected. Falls back to the latest
                // upload if the promo metadata can't be fetched.
                if (activePlaylist.id === UPLOADS_PLAYLIST_ID) {
                    const promo = await fetchPromoVideo();
                    if (promo) {
                        finalVideos = [
                            promo,
                            ...validVideos.filter(
                                (v) => v.contentDetails.videoId !== PROMO_VIDEO_ID
                            ),
                        ];
                    }
                }

                setVideos(finalVideos);

                if (finalVideos.length > 0) {
                    setSelectedVideo(finalVideos[0]);
                }
            } catch (err: any) {
                setVideosError(err.message || "Error loading videos");
            } finally {
                setVideosLoading(false);
            }
        };

        fetchVideos();
    }, [activePlaylist]);

    /* ----------------------------- */
    /*        Component JSX          */
    /* ----------------------------- */

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-yeshiva-primary mb-6">שיעורים ושיחות</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                    צפו בשיעורים ובשיחות המרתקות של רבני הישיבה
                </p>
                <a
                    href={SPOTIFY_SHOW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-full px-5 py-2.5 font-medium shadow-md transition-all duration-300 hover:scale-105"
                >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.38-1.32 9.78-.66 13.5 1.62.42.18.6.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.1 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.32-1.32 11.4-1.02 15.9 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z" />
                    </svg>
                    <span>האזינו בספוטיפיי</span>
                </a>
            </div>

            {/* Playlist Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                <Button
                    onClick={() =>
                        setActivePlaylist({ id: UPLOADS_PLAYLIST_ID, title: "הכל" })
                    }
                    variant={activePlaylist.title === "הכל" ? "default" : "outline"}
                    className={`rounded-full transition-all duration-300 ${activePlaylist.title === "הכל"
                        ? "bg-yeshiva-primary hover:bg-yeshiva-primary text-white"
                        : "border-yeshiva-primary text-yeshiva-primary hover:bg-yeshiva-primary hover:text-white"
                        }`}
                >
                    הכל
                </Button>

                {playlists.map((playlist) => (
                    <Button
                        key={playlist.id}
                        onClick={() =>
                            setActivePlaylist({
                                id: playlist.id,
                                title: playlist.snippet.title,
                            })
                        }
                        variant={activePlaylist.id === playlist.id ? "default" : "outline"}
                        className={`rounded-full transition-all duration-300 ${activePlaylist.id === playlist.id
                            ? "bg-yeshiva-primary hover:bg-yeshiva-primary text-white"
                            : "border-yeshiva-primary text-yeshiva-primary hover:bg-yeshiva-primary hover:text-white"
                            }`}
                    >
                        {playlist.snippet.title}
                    </Button>
                ))}
            </div>

            {/* Loading skeleton */}
            {videosLoading && (
                <div className="space-y-4">
                    <Skeleton className="w-full aspect-video" />
                    <Skeleton className="h-8 w-3/4" />
                </div>
            )}

            {/* Error */}
            {videosError && (
                <Card className="bg-red-50 border-red-200 text-red-800">
                    <CardContent className="p-6 flex items-center gap-4">
                        <AlertTriangle className="w-8 h-8" />
                        <div>
                            <h3 className="font-bold">אירעה שגיאה</h3>
                            <p>{videosError}</p>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Selected video display */}
            {!videosLoading && !videosError && selectedVideo && (
                <div id="selected-video" className="mb-16 scroll-mt-32">
                    <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <div className="relative bg-gray-900 aspect-video">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${selectedVideo.contentDetails.videoId}`}
                                        title={selectedVideo.snippet.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="md:w-1/2 p-8">
                                <span className="text-gray-500 text-sm">
                                    {new Date(
                                        selectedVideo.snippet.publishedAt
                                    ).toLocaleDateString("he-IL")}
                                </span>
                                <h3 className="text-2xl font-bold text-yeshiva-primary my-4">
                                    {selectedVideo.snippet.title}
                                </h3>
                                <p className="text-gray-700 mb-6 leading-relaxed line-clamp-4">
                                    {selectedVideo.snippet.description}
                                </p>
                                <a
                                    href={`https://www.youtube.com/watch?v=${selectedVideo.contentDetails.videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button className="bg-yeshiva-accent hover:bg-yeshiva-accent/90 text-white w-full">
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                        צפה ביוטיוב
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            )}

            {/* Video grid */}
            {!videosLoading && videos.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <Card
                            key={video.id}
                            className="overflow-hidden bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                            onClick={() => {
                                setSelectedVideo(video);
                                document
                                    .getElementById("selected-video")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                            }}
                        >
                            <div className="relative bg-gray-900 aspect-video">
                                <img
                                    src={video.snippet.thumbnails?.medium?.url ?? ""}
                                    alt={video.snippet.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Play className="w-16 h-16 text-white opacity-90" />
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <span className="text-gray-500 text-xs">
                                    {new Date(
                                        video.snippet.publishedAt
                                    ).toLocaleDateString("he-IL")}
                                </span>
                                <h3 className="text-lg font-bold text-yeshiva-primary my-3 line-clamp-2">
                                    {video.snippet.title}
                                </h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
