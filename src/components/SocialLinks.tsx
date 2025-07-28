import { Facebook, Youtube, Instagram, Linkedin, Gamepad2 } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://example.com", label: "Facebook" },
    { icon: Youtube, href: "https://www.youtube.com/@djangelic/about", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/djangelic/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/angelgmenendez/", label: "LinkedIn" },
    { icon: Gamepad2, href: "https://steamcommunity.com/id/djangelic/", label: "Steam" },
  ];

  return (
    <div className="flex justify-center mt-8">
      <ul className="flex space-x-6 list-none">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              rel="nofollow noopener"
              target="_blank"
              className="btn-dj-social text-2xl"
              aria-label={link.label}
            >
              <link.icon size={24} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;