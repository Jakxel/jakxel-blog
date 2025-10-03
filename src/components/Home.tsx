import { useEffect, useState } from 'react';
import { getAllPosts} from '../getPosts'; // Ajusta la ruta si es necesario
import '../styles/Home.css';

// Define the PostMeta type if not imported from elsewhere
type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

const Home = () => {
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

    return (
      <main className='section'>
        <div className='home-main'>
          <strong id='title-home'>The Blog of one student in Computer Systems Engineering.</strong>
          <p>Here i share ideas, notes, reflections, and anything that sparks curiosity during my daily experiences, study sessions, and technical explorations.</p>
          <p>I believe that sharing knowledge is one of the best ways to learn and grow. That's why I document my progress here — to clarify my own understanding, keep track of my evolution, and hopefully help or inspire others along the way.</p>
          <p>You'll find here a mix of technical notes, project breakdowns, thoughts, and software engineering insights, all written from my perspective and personal knowledge.</p>
        </div>
        <div className="recent-post">
          <strong id='title-home'>Recent Posts</strong>
          <ul>
            {posts.map((post) => (
              <li key={post.slug} className="post-item">
                <a href={`/posts/${post.slug}`} className="post-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h4>{post.title}</h4>
                  <small>{post.date}</small>
                  <p>{post.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  };

  export default Home;

