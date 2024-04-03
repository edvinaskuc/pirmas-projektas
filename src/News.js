import "./News.css";
import NewsSection from "./NewsSection";
import VideoSection from "./VideoSection";
import PodCastSection from "./PodCastSection";
import EventsSection from "./EventsSection";

export default function News() {
  return (
    <div className="container">
      <div className="page-content">
        <main className="main-content">
          <NewsSection />
          <VideoSection />
        </main>

        <aside className="sidebar-content">
          <PodCastSection />
          <EventsSection />
        </aside>
      </div>
    </div>
  );
}
