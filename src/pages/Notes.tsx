import '../styles/pages/Notes.css';

const Notes = () => {
  return (
    <div className="box">
      <div className="header">
        <h1>Notes</h1>
        <p>
          These notes cover a variety of Computer Science topics. They were created for self-review and to be a helpful resource for others as well.
        </p>
        <p>
          All content has been written by me based on independent research and personal study, without relying on AI tools. The goal is to deepen understanding through genuine learning and investigation.
        </p>
      </div>

      <div className="main">
        <h2>01. Core CS Fundamentals</h2>
        <ul>
          <li>
            <a href="/pdfs/01-math.pdf" target="_blank" rel="noopener noreferrer">
              1. Mathematics for Computer Science (PDF Preview) Coming soon...
            </a>
          </li>
          <li>
            <a href="/pdfs/02-algorithms.pdf" target="_blank" rel="noopener noreferrer">
              2. Algorithms and Data Structures (PDF Preview) Coming soon...
            </a>
          </li>
          <li>
            <a href="/pdfs/03-paradigms.pdf" target="_blank" rel="noopener noreferrer">
              3. Programming Paradigms (PDF Preview) Coming soon...
            </a>
          </li>
          <li>
            <a href="/pdfs/04-architecture.pdf" target="_blank" rel="noopener noreferrer">
              4. Computer Architecture (PDF Preview) Coming soon...
            </a>
          </li>
          <li>
            <a href="/pdfs/05-os.pdf" target="_blank" rel="noopener noreferrer">
              5. Operating Systems (PDF Preview) Coming soon...
            </a>
          </li>
          <li>
            <a href="/pdfs/06-computation.pdf" target="_blank" rel="noopener noreferrer">
              6. Theory of Computation (PDF Preview) Coming soon...
            </a>
          </li>
          <li>
            <a href="/pdfs/07-networking.pdf" target="_blank" rel="noopener noreferrer">
              7. Networking and Communications (PDF Preview) Coming soon...
            </a>
          </li>
          <li>
            <a href="/pdfs/08-databases.pdf" target="_blank" rel="noopener noreferrer">
              8. Databases (PDF Preview) Coming soon...
            </a>
          </li>
        </ul>

        <h2>02. Software Engineering</h2>
        <ul>
          <li>Coming soon...</li>
        </ul>

        <h2>03. System Design</h2>
        <ul>
          <li>Coming soon...</li>
        </ul>

        <h2>04. Advanced Topics</h2>
        <ul>
          <li>Coming soon...</li>
        </ul>

        <h2>05. Real-World Applications</h2>
        <ul>
          <li>Coming soon...</li>
        </ul>
      </div>
    </div>
  );
};

export default Notes;
