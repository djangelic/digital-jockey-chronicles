import { Link } from "react-router-dom";

export interface BlogPostData {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt?: string;
  content?: string;
}

interface BlogPostProps {
  post: BlogPostData;
  isListView?: boolean;
}

const BlogPost = ({ post, isListView = true }: BlogPostProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit', 
      year: 'numeric'
    });
  };

  if (isListView) {
    return (
      <li className="mb-2">
        <time className="mr-2 text-muted-foreground">
          {formatDate(post.date)}
        </time>
        <Link 
          to={`/article/${post.id}`}
          className="text-brand-secondary hover:text-primary transition-colors duration-300"
        >
          {post.title}
        </Link>
        {post.tags.length > 0 && (
          <span className="ml-2">
            &nbsp;Tags:&nbsp;
            <i>
              {post.tags.map((tag, index) => (
                <span key={tag}>
                  <Link 
                    to={`/tag/${encodeURIComponent(tag)}`}
                    className="mr-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {tag}
                  </Link>
                  {index < post.tags.length - 1 && ", "}
                </span>
              ))}
            </i>
          </span>
        )}
      </li>
    );
  }

  // Full post view
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-secondary mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <time>{formatDate(post.date)}</time>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/tag/${encodeURIComponent(tag)}`}
                  className="bg-secondary px-2 py-1 rounded text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>
      <div className="prose prose-lg max-w-none text-brand-secondary">
        {post.content || post.excerpt || "Content coming soon..."}
      </div>
    </article>
  );
};

export default BlogPost;