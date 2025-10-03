import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="box">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>
          If you want to reach out to me for questions, collaborations, feedback, or just to connect, feel free to use any of the methods below:
        </p>
        <ul>
          <li>
            <strong>Email:</strong> <a href="mailto:Jakxel.dev@gmail.com">Jakxel.dev@gmail.com</a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/jakxel" target="_blank" rel="noopener noreferrer">
              github.com/Jakxel
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/victor-jakxel-islas-carreon-b6a156351/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/victor-jakxel-islas-carreon-b6a156351
            </a>
          </li>

        </ul>
        <p>
          I’m open to conversation about tech, learning, personal projects, or anything you find interesting.
        </p>
      </div>
      <footer className="contact-footer">
        <p>© 2025 Jakxel Islas — Powered by Vercel</p>
      </footer>
    </div>
  );
};

export default Contact;