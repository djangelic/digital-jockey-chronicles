import { blogPosts } from "../data/blogPosts";

export const generateRSSFeed = () => {
  const siteUrl = "https://djangelic.com";
  const feedUrl = `${siteUrl}/rss.xml`;
  
  const rssItems = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20) // Latest 20 posts
    .map(post => {
      const postUrl = `${siteUrl}/article/${post.id}`;
      const pubDate = new Date(post.date).toUTCString();
      
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid>${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${post.excerpt || 'No excerpt available.'}]]></description>
      ${post.tags.map(tag => `<category>${tag}</category>`).join('\n      ')}
    </item>`;
    }).join('\n');

  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Nerdy Thoughts of a Digital Jockey</title>
    <link>${siteUrl}</link>
    <description>⛱ Traveler, 💻 Hacker, 👼👼 Dad, 🚀 Sci-Fi book lover - Staff Developer Advocate at n8n.io</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <image>
      <url>https://i.imgur.com/pFyFRsf.png</url>
      <title>Nerdy Thoughts of a Digital Jockey</title>
      <link>${siteUrl}</link>
    </image>
${rssItems}
  </channel>
</rss>`;

  return rssContent;
};