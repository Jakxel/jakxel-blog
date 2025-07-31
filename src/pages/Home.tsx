import profileImg from '../assets/147444918.png';
import '../styles/pages/Home.css'

const Home = () => {
  return (
    <div className='box'>
      <div className='home-header'>
        <div className='home-header-info'>
          <img src={profileImg} alt="Photo profile Islas J" />
          <h1>Islas Carreon Victor Jakxel -- Blog </h1>
        </div>
      </div>
      <div className='home-main'>
        <div className='home-article'>
            <p>Student in Computer Systems Engineering.</p>
            <p>Here i share ideas, notes, reflections, and anything that sparks curiosity during my daily experiences, study sessions, and technical explorations.</p>
            <p>I'm currently in the final stages of my degree, and one of my biggest goals is to strengthen my skills by working on real-world projects, building things from scratch, and solving meaningful problems through practice and experimentation.\</p>
            <p>I believe that sharing knowledge is one of the best ways to learn and grow. That's why I document my progress here — to clarify my own understanding, keep track of my evolution, and hopefully help or inspire others along the way.</p>
            <p>You'll find here a mix of technical notes, project breakdowns, thoughts, and software engineering insights, all written from my perspective and personal knowledge.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
