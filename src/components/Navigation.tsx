import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="mb-8">
      <Link 
        to="/" 
        className="text-brand-secondary hover:text-primary transition-colors duration-300 text-xl font-semibold"
      >
        Nerdy Thoughts of a Digital Jockey
      </Link>
    </nav>
  );
};

export default Navigation;