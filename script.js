// Replace with your own API keys
const YOUTUBE_API_KEY = "AIzaSyDfVOybkkeBltUcvKHk3LU_pzH3ASiH4BQ";
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

// DOM references
const youtubeTab = document.getElementById('youtubeTab');
const calendarTab = document.getElementById('calendarTab');
const instagramTab = document.getElementById('instagramTab');
const mapTab = document.getElementById('mapTab');
const aboutTab = document.getElementById('aboutTab');
const youtubeSection = document.getElementById('youtubeSection');
const calendarSection = document.getElementById('calendarSection');
const instagramSection = document.getElementById('instagramSection');
const mapSection = document.getElementById('mapSection');
const aboutSection = document.getElementById('aboutSection');

// YouTube elements
const channelInput = document.getElementById('channelInput');
const contentContainer = document.getElementById('contentContainer');
const statusMessage = document.getElementById('statusMessage');
const loader = document.getElementById('loader');
const messageText = document.getElementById('messageText');
const channelTitleEl = document.getElementById('channelTitle');
const channelDescriptionEl = document.getElementById('channelDescription');
const channelThumbnailEl = document.getElementById('channelThumbnail');
const mainVideoEl = document.getElementById('mainVideo');
const moreVideosContainer = document.getElementById('moreVideosContainer');
const playlistsContainer = document.getElementById('playlistsContainer');

// Calendar elements
const calendarDisplay = document.getElementById('calendarDisplay');

// --- Tab Switching Logic ---
function showTab(tabName) {
    youtubeSection.classList.add('hidden');
    calendarSection.classList.add('hidden');
    instagramSection.classList.add('hidden');
    mapSection.classList.add('hidden');
    aboutSection.classList.add('hidden');
    youtubeTab.classList.remove('active');
    calendarTab.classList.remove('active');
    instagramTab.classList.remove('active');
    mapTab.classList.remove('active');
    aboutTab.classList.remove('active');

    if (tabName === 'youtube') {
        youtubeSection.classList.remove('hidden');
        youtubeTab.classList.add('active');
    } else if (tabName === 'calendar') {
        calendarSection.classList.remove('hidden');
        calendarTab.classList.add('active');
    } else if (tabName === 'instagram') {
        instagramSection.classList.remove('hidden');
        instagramTab.classList.add('active');
    } else if (tabName === 'map') {
        mapSection.classList.remove('hidden');
        mapTab.classList.add('active');
    } else if (tabName === 'about') {
        aboutSection.classList.remove('hidden');
        aboutTab.classList.add('active');
    }
}

youtubeTab.addEventListener('click', () => showTab('youtube'));
calendarTab.addEventListener('click', () => showTab('calendar'));
instagramTab.addEventListener('click', () => showTab('instagram'));
mapTab.addEventListener('click', () => showTab('map'));
aboutTab.addEventListener('click', () => showTab('about'));
showTab('youtube'); // default


// --- YouTube API Logic ---
const fetchApi = async (url, errorMessage) => {
    const response = await fetch(url);
    if (!response.ok) {
        if (response.status === 403 || response.status === 400) {
            throw new Error("API Error: Please check your API key or quota.");
        } else {
            throw new Error(errorMessage || "Unexpected API error.");
        }
    }
    return await response.json();
};

const fetchChannelData = async () => {
    contentContainer.classList.add('hidden');
    showLoader(true, "Fetching channel data...");
    const channelId = 'UCioZXW3oASlPs3WsWPtRgMA';

    if (!channelId) {
        showMessage("Could not determine a valid channel ID.");
        return;
    }

    try {
        const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`;
        const channelData = await fetchApi(channelUrl, "Channel not found.");
        if (!channelData.items || channelData.items.length === 0) {
            showMessage("Channel not found.");
            return;
        }
        const channel = channelData.items[0];
        const uploadsPlaylistId = channel.contentDetails.relatedPlaylists.uploads;

        channelTitleEl.textContent = channel.snippet.title;
        channelDescriptionEl.textContent = channel.snippet.description;
        channelThumbnailEl.src = channel.snippet.thumbnails.high.url;

        const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${uploadsPlaylistId}&maxResults=9&key=${YOUTUBE_API_KEY}`;
        const videosData = await fetchApi(videosUrl, "Could not fetch videos.");
        moreVideosContainer.innerHTML = '';
        playlistsContainer.innerHTML = '';

        const latestVideo = videosData.items[0];
        if (latestVideo) {
            mainVideoEl.src = `https://www.youtube.com/embed/${latestVideo.contentDetails.videoId}`;
        }

        videosData.items.slice(1).forEach(video => {
            if (video.contentDetails && video.snippet.thumbnails) {
                const videoId = video.contentDetails.videoId;
                const videoTitle = video.snippet.title;
                const thumbnailUrl = video.snippet.thumbnails.medium.url;
                const videoDiv = document.createElement('div');
                videoDiv.className = 'video-thumbnail rounded-lg overflow-hidden shadow-md bg-white';
                videoDiv.innerHTML = `
          <img src="${thumbnailUrl}" alt="${videoTitle}" class="w-full h-auto object-cover rounded-t-lg">
          <div class="p-4"><p class="font-semibold text-sm text-gray-900 truncate">${videoTitle}</p></div>
        `;
                videoDiv.onclick = () => changeMainVideo(videoId);
                moreVideosContainer.appendChild(videoDiv);
            }
        });

        const playlistsUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=10&key=${YOUTUBE_API_KEY}`;
        const playlistsData = await fetchApi(playlistsUrl, "Could not fetch playlists.");
        if (playlistsData.items) {
            playlistsData.items.forEach(playlist => {
                if (playlist.snippet.thumbnails) {
                    const playlistTitle = playlist.snippet.title;
                    const thumbnailUrl = playlist.snippet.thumbnails.medium.url;
                    const playlistDiv = document.createElement('div');
                    playlistDiv.className = 'flex-shrink-0 w-64 video-thumbnail rounded-lg overflow-hidden shadow-md bg-white';
                    playlistDiv.innerHTML = `
            <img src="${thumbnailUrl}" alt="${playlistTitle}" class="w-full h-auto object-cover rounded-t-lg">
            <div class="p-4"><p class="font-semibold text-sm text-gray-900 truncate">${playlistTitle}</p></div>
          `;
                    playlistsContainer.appendChild(playlistDiv);
                }
            });
        }

        showLoader(false);
        contentContainer.classList.remove('hidden');
    } catch (err) {
        console.error(err);
        showMessage(err.message);
    }
};

const changeMainVideo = (videoId) => {
    mainVideoEl.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

const showLoader = (isLoading, message = "") => {
    if (isLoading) {
        loader.classList.remove('hidden');
        messageText.textContent = message;
        statusMessage.classList.remove('hidden');
    } else {
        loader.classList.add('hidden');
        statusMessage.classList.add('hidden');
    }
};

const showMessage = (message) => {
    showLoader(false);
    messageText.textContent = message;
    statusMessage.classList.remove('hidden');
};


// --- Calendar ---
const displayCalendar = () => {
    const email = 'bgrz.rnn@gmail.com';
    if (!email) {
        calendarDisplay.innerHTML = `<p class="text-center text-lg text-gray-500">Please enter a valid Gmail address.</p>`;
        return;
    }
    const encodedEmail = encodeURIComponent(email);
    const iframeSrc = `https://calendar.google.com/calendar/embed?src=${encodedEmail}&ctz=Asia%2FJerusalem&mode=AGENDA`;
    calendarDisplay.innerHTML = `
    <div class="relative w-full pb-[75%] h-0">
      <iframe src="${iframeSrc}" class="absolute top-0 left-0 w-full h-full rounded-lg shadow-md" style="border:0" frameborder="0" scrolling="no"></iframe>
    </div>`;
};


// --- load content ---
displayCalendar()
fetchChannelData()
