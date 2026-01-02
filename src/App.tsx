import { useEffect, useState, useRef } from "react";
import { Heart, Home as HomeIcon, Play, BookOpen, Instagram, Menu, X, HeartHandshake, Phone } from "lucide-react";
import LandingSection from "./pages/landing";
import HeroSection from "./pages/heros";
import VideosSection from "./pages/vidoes";
import ProgramsSection from "./pages/programs";
import PhotosSection from "./pages/photos";
import ContactSection from "./pages/contact";

const navigationItems = [
  { id: "home", title: "דף הבית", icon: HomeIcon },
  { id: "videos", title: "ספריית שיעורים", icon: Play },
  { id: "programs", title: "תוכניות הלימוד", icon: BookOpen },
  { id: "photos", title: "גלריה", icon: Instagram },
  { id: "contact", title: "צור קשר", icon: Phone },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});


  // Scroll spy effect and navigation visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      setShowNav(window.scrollY > window.innerHeight - 100);

      let newActive: string | null = null;
      for (const item of navigationItems) {
        const section = sectionRefs.current[item.id];
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            newActive = item.id;
            break;
          }
        }
      }
      if (newActive && newActive !== activeSection) setActiveSection(newActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      const yOffset = -120;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div dir="rtl" className="min-h-screen" style={{ backgroundColor: '#FDFDFB' }}>
      <style>
        {`
          :root {
            --yeshiva-bg: #FDFDFB;
            --yeshiva-primary: #6F6E2E;
            --yeshiva-accent: #CBA42B;
          }
          body { background-color: var(--yeshiva-bg); }
          .text-yeshiva-primary { color: var(--yeshiva-primary); }
          .text-yeshiva-accent { color: var(--yeshiva-accent); }
          .bg-yeshiva-primary { background-color: var(--yeshiva-primary); }
          .bg-yeshiva-accent { background-color: var(--yeshiva-accent); }
          .border-yeshiva-primary { border-color: var(--yeshiva-primary); }
          .border-yeshiva-accent { border-color: var(--yeshiva-accent); }
        `}
      </style>

      {/* Desktop Navigation - Fixed Banner */}
      <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="https://tzalash.org/he/%d7%aa%d7%a8%d7%95%d7%9e%d7%94-%d7%9c%d7%91%d7%99%d7%aa-%d7%94%d7%9e%d7%93%d7%a8%d7%a9-%d7%9c%d7%91%d7%95%d7%92%d7%a8%d7%99-%d7%a6%d7%91%d7%90/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-yeshiva-accent text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yeshiva-accent/90"
            >
              <Heart className="w-4 h-4" />
              תרומות
            </a>
            <div className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id
                    ? 'bg-yeshiva-primary text-white shadow-md'
                    : 'text-yeshiva-primary hover:bg-yeshiva-primary/10'
                    }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.title}
                </button>
              ))}
            </div>
            <h1 className="text-xl font-bold text-yeshiva-primary">ישיבת בוגרי צבא רעננה</h1>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center justify-between px-4 h-14">
          <h1 className="text-lg font-bold text-yeshiva-primary">ישיבת בוגרי צבא רעננה</h1>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-yeshiva-primary" /> : <Menu className="w-6 h-6 text-yeshiva-primary" />}
          </button>
        </div>



        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-14 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-right transition-all duration-300 ${activeSection === item.id
                    ? 'bg-yeshiva-primary text-white'
                    : 'text-yeshiva-primary hover:bg-yeshiva-primary/10'
                    }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Floating Donate Button */}
      <a
        href="https://tzalash.org/he/%d7%aa%d7%a8%d7%95%d7%9e%d7%94-%d7%9c%d7%91%d7%99%d7%aa-%d7%94%d7%9e%d7%93%d7%a8%d7%a9-%d7%9c%d7%91%d7%95%d7%92%d7%a8%d7%99-%d7%a6%d7%91%d7%90/"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-yeshiva-accent to-yellow-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
      >
        <HeartHandshake className="w-6 h-6" />
      </a>

      {/* Main Content */}
      <main>
        {/* LANDING SECTION */}
        <section className="h-screen">
          <LandingSection />
        </section>

        {/* HOME SECTION */}
        <section ref={(el) => { sectionRefs.current["home"] = el; }} id="home" className="min-h-screen py-12 pt-16 md:pt-20">
          <HeroSection />
        </section>

        {/* VIDEOS SECTION */}
        <section ref={(el) => { sectionRefs.current["videos"] = el; }} id="videos" className="min-h-screen py-12 bg-white/40">
          <VideosSection />
        </section>

        {/* STUDY PROGRAMS SECTION */}
        <section ref={(el) => { sectionRefs.current["programs"] = el; }} id="programs" className="min-h-screen py-12">
          <ProgramsSection />
        </section>

        {/* PHOTOS SECTION */}
        <section ref={(el) => { sectionRefs.current["photos"] = el; }} id="photos" className="min-h-screen py-12 bg-white/40">
          <PhotosSection />
        </section>

        {/* CONTACT SECTION */}
        <section ref={(el) => { sectionRefs.current["contact"] = el; }} id="contact" className="min-h-screen py-12">
          <ContactSection />
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white/40 backdrop-blur-sm mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-yeshiva-primary font-medium mb-2">בוגרצ רעננה</p>
              <p className="text-gray-600 text-sm">© 2024 כל הזכויות שמורות</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}