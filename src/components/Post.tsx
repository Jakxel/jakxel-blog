import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getAllPosts } from '../getPosts';
import type { FullPost } from '../getPosts';

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<FullPost | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!slug) return;
      const all = await getAllPosts();
      const match = all.find((p) => p.slug === slug);
      if (match) {
        try {
          const raw = await import(`../posts/${slug}.md?raw`);
          // ⚡ procesamos el raw otra vez para separar frontmatter y content
          const matter = await import("gray-matter").then(m => m.default);
          const { content } = matter(raw.default);

          setPost({ ...match, content });
        } catch (err) {
          console.error(`❌ Error loading post: ${slug}`, err);
        }
      }
    };
    load();
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <article className="box post-article">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-meta">{post.date}</p>
      <div className="post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <style>{`
        .post-article {
          padding: 2rem;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
        }
        .post-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #22223b;
        }
        .post-meta {
          color: #9a8c98;
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }
        .post-content {
          line-height: 1.7;
          color: #4a4e69;
          font-size: 1.5rem;
        }
        .post-content h2, .post-content h3 {
          margin-top: 2rem;
          color: #22223b;
        }
        .post-content pre {
          background: #f2e9e4;
          padding: 1rem;
          border-radius: 8px;
          overflow-x: auto;
        }
        .post-content code {
          background: #f2e9e4;
          padding: 0.2em 0.4em;
          border-radius: 4px;
          font-size: 2rem;
        }
        .post-content a {
          color: #5a189a;
          text-decoration: underline;
        }
        .post-content ul, .post-content ol {
          margin-left: 2rem;
        }
        .post-content blockquote {
          border-left: 4px solid #c9ada7;
          margin: 1.5em 0;
          padding: 0.5em 1em;
          color: #6c757d;
          background: #f8f9fa;
        }
      `}</style>
    </article>
  );
};

export default Post;