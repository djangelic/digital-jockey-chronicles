import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import SocialLinks from "../components/SocialLinks";

const Index = () => {
  const navigationLinks = [
    { href: "/blog", label: "Journal" },
    { href: "/about", label: "About" },
    { href: "/subscribe", label: "Subscribe" },
    { href: "/rss.xml", label: "RSS", external: true },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-8">
      <div className="hero-card container max-w-md mx-auto text-center p-8">
        {/* Profile Image - Fixed to match original styling */}
        <div className="mb-6">
          <img 
            src="https://i.imgur.com/pFyFRsf.png" 
            alt="Digital Jockey Profile" 
            className="w-24 h-24 mx-auto"
            style={{ marginBottom: '-10px' }}
          />
        </div>

        {/* Main Title with Burnt Orange Gradient */}
        <div className="mb-2">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-brand-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-sm">
            Digital Jockey
          </h1>
        </div>

        {/* Subtitle with Better Typography */}
        <div className="mb-8">
          <div className="text-brand-secondary space-y-2 text-lg">
            <p className="flex items-center justify-center gap-2">⛱ <span className="font-medium">Traveler</span></p>
            <p className="flex items-center justify-center gap-2">💻 <span className="font-medium">Hacker</span></p>
            <p className="flex items-center justify-center gap-2">👼👼 <span className="font-medium">Dad</span></p>
            <p className="flex items-center justify-center gap-2">🚀 <span className="font-medium">Sci-Fi book lover</span></p>
            <div className="bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm p-4 rounded-xl mt-6 border border-accent/30">
              <div className="flex items-center gap-3">
                <img 
                  src="https://n8n.io/favicon.ico" 
                  alt="n8n logo" 
                  className="w-8 h-8 flex-shrink-0"
                />
                <p className="text-sm leading-relaxed">
                  Staff Developer Advocate at n8n.io. Find my free n8n templates here:{" "}
                  <a 
                    href="https://n8n.io/creators/djangelic/" 
                    className="text-primary hover:text-accent font-medium hover:underline transition-colors duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    https://n8n.io/creators/djangelic/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Navigation Buttons */}
        <div className="space-y-4 mb-8">
          {navigationLinks.map((link) => (
            link.external ? (
              <a 
                key={link.href}
                href={link.href}
                className="btn-dj-outline block w-full py-4 px-6 text-center font-semibold rounded-xl text-lg"
              >
                {link.label}
              </a>
            ) : (
              <Link 
                key={link.href}
                to={link.href}
                className="btn-dj-outline block w-full py-4 px-6 text-center font-semibold rounded-xl text-lg"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Enhanced Social Links */}
        <SocialLinks />
      </div>
    </div>
  );
};

export default Index;
