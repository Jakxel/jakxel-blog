
import '../styles/Home.css'

const examplePosts = [
  {
    title: 'Understanding React Hooks',
    date: '2024-06-01',
    summary: 'A beginner-friendly guide to using React Hooks for state and side effects.',
  },
  {
    title: 'My Journey with TypeScript',
    date: '2024-05-20',
    summary: 'Reflections and tips after migrating a project from JavaScript to TypeScript.',
  },
  {
    title: 'Debugging Node.js Applications',
    date: '2024-05-10',
    summary: 'Techniques and tools I use to debug Node.js backends efficiently.',
  },
];

const Home = () => {
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
          {examplePosts.map((post, idx) => (
            <li key={idx} className="post-item">
              <h4>{post.title}</h4>
              <small>{post.date}</small>
              <p>{post.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;