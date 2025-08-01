import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getAllPosts } from '../getPosts';
import type { FullPost } from '../getPosts';

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<FullPost | null>(null);

  useEffect(() => {
    const load = async () => {
      const all = await getAllPosts();
      const match = all.find((p) => p.slug === slug);
      if (match) {
        try {
          const raw = await import(`../posts/${slug}.md?raw`);
          const content = raw.default;
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
    <div className="box">
      <h1>{post.title}</h1>
      <p className="post-meta">{post.date}</p>
      <ReactMarkdown>{post.content || ''}</ReactMarkdown>
    </div>
  );
};

export default Post;
