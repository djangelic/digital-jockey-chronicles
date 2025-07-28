import { useState } from "react";
import Navigation from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useToast } from "../hooks/use-toast";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate subscription process
    setTimeout(() => {
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive updates about new posts and adventures.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Navigation />
      
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-secondary mb-8">Subscribe</h1>
        
        <div className="text-brand-secondary space-y-6">
          <p className="text-lg leading-relaxed">
            Stay updated with my latest thoughts, automation tips, travel stories, and 
            philosophical musings. No spam, just genuine content when I have something 
            interesting to share.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-brand-secondary mb-4">
              Join the Digital Journey
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading || !email}
                className="w-full btn-dj-outline"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            
            <p className="text-sm text-muted-foreground mt-4">
              By subscribing, you'll get notified about new blog posts, n8n automation tips, 
              and occasional updates about my adventures. You can unsubscribe at any time.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-brand-secondary">What to Expect</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• New blog posts about technology, travel, and life philosophy</li>
              <li>• Free n8n automation templates and workflows</li>
              <li>• Stories from the aviation industry and travel experiences</li>
              <li>• Thoughts on emerging technologies and automation trends</li>
              <li>• Book recommendations and sci-fi discussions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;