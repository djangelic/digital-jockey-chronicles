import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Navigation />
      
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-brand-secondary mb-8">About Digital Jockey</h1>
        
        <div className="text-brand-secondary space-y-6">
          <p className="text-lg leading-relaxed">
            Welcome to my corner of the internet! I'm a traveler, hacker, dad, and sci-fi book lover 
            who finds joy in exploring both the digital and physical worlds.
          </p>
          
          <p className="leading-relaxed">
            As a Staff Developer Advocate at n8n.io, I help people discover the power of automation 
            and workflow optimization. You can find my free n8n templates at{" "}
            <a 
              href="https://n8n.io/creators/djangelic/" 
              className="text-primary hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://n8n.io/creators/djangelic/
            </a>
          </p>
          
          <p className="leading-relaxed">
            My journey has taken me through many different roles and experiences - from flight attendant 
            to developer advocate. Each chapter has shaped my perspective on technology, travel, and life.
          </p>
          
          <p className="leading-relaxed">
            When I'm not crafting automation workflows or exploring new technologies, you'll find me 
            lost in a good science fiction novel, planning the next family adventure, or sharing 
            stories from my travels and experiences in the aviation industry.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-semibold text-brand-secondary mb-4">Connect With Me</h2>
            <p className="text-muted-foreground">
              Feel free to reach out through any of the social channels on the homepage, 
              or subscribe to stay updated with my latest thoughts and adventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;