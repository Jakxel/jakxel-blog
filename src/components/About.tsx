import '../styles/About.css';

const About = () => {
  return (
    <div className='box'>
      <div className='about-header'>
        <div className='about-header-info'>
          <h1>Islas Carreon Victor Jakxel</h1>        
        </div>
      </div>
      <div className='about-main'>
        <div className='about-article'>
          <p>
            I'm a Computer Systems Engineering student based in Tijuana, Mexico. I have a strong interest in 
            core Computer Science topics, including algorithms, data structures, operating systems, and software design.
          </p>
          <p>
            I'm continuously learning and building personal projects to strengthen my skills. I also explore fields like 
            web development, system design, and low-level programming. My goal is to become a versatile software engineer 
            capable of solving real-world problems through innovation and code.
          </p>
          <p>
            Outside of tech, some of my hobbies include reading, playing piano, learning new languages, drawing, meditating, exercising, and sometimes 
            just relaxing with music, anime, or spending time with friends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;