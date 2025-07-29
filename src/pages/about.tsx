import profileImg from '../assets/147444918.png';
import '../styles/About.css';

const About = () => {
  return (
    <div className='about'>
      <div className='header-about'>
        <img src={profileImg} alt="Photo profile Islas J" />
        <h1>Islas Carreon Victor Jakxel</h1>
      </div>
      <div className='info-about'>
        <p>Student in Computer Systems Engineering.</p>
        <p>I share ideas, notes, reflections, and anything that sparks curiosity during my daily experiences, study sessions, and technical explorations.</p>
        <p>I'm currently in the final stages of my degree, and one of my biggest goals is to strengthen my skills by working on real-world projects, building things from scratch, and solving meaningful problems through practice and experimentation.\</p>
        <p>I believe that sharing knowledge is one of the best ways to learn and grow. That's why I document my progress here — to clarify my own understanding, keep track of my evolution, and hopefully help or inspire others along the way.</p>
        <p>You'll find here a mix of technical notes, project breakdowns, thoughts, and software engineering insights, all written from my perspective and personal knowledge.</p>
      </div>
    </div>
  );
};

export default About;
