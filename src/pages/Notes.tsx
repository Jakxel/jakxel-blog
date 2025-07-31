import '../styles/pages/Notes.css'
const Notes = () => {
  return (
    <div className="display">
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
<div className="main">
  <ul>
    <li>
      <a href="/pdfs/algorithms.pdf" target="_blank" rel="noopener noreferrer">
        Algorithms & Complexity example of pdf
      </a>
    </li>
    <li>
      <a href="/pdfs/data-structures.pdf" target="_blank" rel="noopener noreferrer">
        Data Structures Notes example of pdf
      </a>
    </li>
    <li>
      <a href="/pdfs/system-design.pdf" target="_blank" rel="noopener noreferrer">
        System Design Overview example of pdf
      </a>
    </li>
  </ul>
</div>
      </div>
    </div>
  );
}

export default Notes;
