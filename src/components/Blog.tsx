import '../styles/Blog.css';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../getPosts';
import type { PostMeta } from '../getPosts';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  
  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <div className="box">
      <div className="blog-title-section">
        <div className="blog-title-info">
          <h1>Blog Post Section</h1>
          <p>
            This section is dedicated to my blog posts, which may cover a variety of topics related to technology, programming, research on different articles or publications from other sources, or simply spontaneous thoughts that come to mind.
          </p>
        </div>
      </div>

      <div className="blog-post-list">
        {posts.map((post) => (
          <div key={post.slug} className="blog-post-preview">
            <h2>{post.title}</h2>
            <p className="post-meta">{post.date}</p>
            <p>{post.description}</p>
            {/* 👇 Ahora usamos Link en lugar de <a> */}
            <Link to={`/posts/${post.slug}`}>
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;