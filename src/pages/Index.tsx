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
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="container max-w-md mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-6">
          <img 
            src="https://i.imgur.com/pFyFRsf.png" 
            alt="Digital Jockey Profile" 
            className="w-24 h-24 mx-auto rounded-full"
            style={{ marginBottom: '-10px' }}
          />
        </div>

        {/* Main Title */}
        <div className="mb-2">
          <h1 className="text-4xl font-bold text-brand-secondary">
            Digital Jockey
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-8">
          <div className="text-brand-secondary space-y-1">
            <p>⛱ Traveler</p>
            <p>💻 Hacker</p>
            <p>👼👼 Dad</p>
            <p>🚀 Sci-Fi book lover</p>
            <p className="text-sm mt-4 leading-relaxed">
              Staff Developer Advocate at n8n.io. Find my free n8n templates here:{" "}
              <a 
                href="https://n8n.io/creators/djangelic/" 
                className="text-primary hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                https://n8n.io/creators/djangelic/
              </a>
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="space-y-3 mb-8">
          {navigationLinks.map((link) => (
            link.external ? (
              <a 
                key={link.href}
                href={link.href}
                className="btn-dj-outline block w-full py-3 px-6 text-center font-medium rounded-lg transition-all duration-300"
              >
                {link.label}
              </a>
            ) : (
              <Link 
                key={link.href}
                to={link.href}
                className="btn-dj-outline block w-full py-3 px-6 text-center font-medium rounded-lg transition-all duration-300"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </div>
  );
};

export default Index;
