import { useParams, Navigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import BlogPost from "../components/BlogPost";
import { blogPosts } from "../data/blogPosts";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Navigation />
      <BlogPost post={post} isListView={false} />
    </div>
  );
};

export default BlogPostPage;