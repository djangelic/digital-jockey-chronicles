import { useEffect } from "react";
import { generateRSSFeed } from "../utils/rss";

const RSS = () => {
  useEffect(() => {
    // Generate and download RSS feed
    const rssContent = generateRSSFeed();
    const blob = new Blob([rssContent], { type: 'application/rss+xml' });
    const url = URL.createObjectURL(blob);
    
    // Create temporary download link
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rss.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Redirect back to home
    window.location.href = '/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-brand-secondary mb-4">Generating RSS Feed...</h1>
        <p className="text-muted-foreground">Your RSS feed will download automatically.</p>
      </div>
    </div>
  );
};

export default RSS;