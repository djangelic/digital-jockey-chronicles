import { useParams, Navigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import BlogPost from "../components/BlogPost";
import { blogPosts } from "../data/blogPosts";

const TagPage = () => {
  const { tag } = useParams<{ tag: string }>();
  
  if (!tag) {
    return <Navigate to="/blog" replace />;
  }

  const decodedTag = decodeURIComponent(tag);
  const filteredPosts = blogPosts.filter(post => 
    post.tags.includes(decodedTag)
  );

  // Group posts by year
  const postsByYear = filteredPosts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, typeof blogPosts>);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Navigation />
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-secondary mb-2">
          Posts tagged with "{decodedTag}"
        </h1>
        <p className="text-muted-foreground">
          {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} found
        </p>
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

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No posts found with this tag.
          </p>
        </div>
      )}
    </div>
  );
};

export default TagPage;