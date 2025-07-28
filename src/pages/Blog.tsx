import { useState, useMemo } from "react";
import Navigation from "../components/Navigation";
import BlogPost from "../components/BlogPost";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Group posts by year
  const postsByYear = useMemo(() => {
    const filtered = selectedTag 
      ? blogPosts.filter(post => post.tags.includes(selectedTag))
      : blogPosts;
    
    return filtered.reduce((acc, post) => {
      const year = new Date(post.date).getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    }, {} as Record<string, typeof blogPosts>);
  }, [selectedTag]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Navigation />
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-brand-secondary mb-4">Blog Archives</h1>
        
        {/* Tag Filter */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 rounded text-sm transition-colors duration-300 ${
                !selectedTag 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              All Posts
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded text-sm transition-colors duration-300 ${
                  selectedTag === tag 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {selectedTag && (
          <p className="text-muted-foreground mb-4">
            Showing posts tagged with "{selectedTag}"
          </p>
        )}
      </div>

      {/* Posts by Year */}
      <div className="space-y-8">
        {Object.entries(postsByYear)
          .sort(([a], [b]) => parseInt(b) - parseInt(a))
          .map(([year, posts]) => (
            <div key={year} className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-secondary mb-4">{year}</h2>
              <ul className="list-none space-y-2">
                {posts
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map(post => (
                    <BlogPost key={post.id} post={post} isListView={true} />
                  ))}
              </ul>
            </div>
          ))}
      </div>

      {Object.keys(postsByYear).length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No posts found for the selected tag.
          </p>
        </div>
      )}
    </div>
  );
};

export default Blog;