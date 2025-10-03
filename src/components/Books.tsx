import "../styles/Books.css";

type Book = {
  title: string;
  description: string;
  comment: string;
  link: string;
  image?: string; // URL of the book cover
};

const books: Book[] = [
  {
    title: "Clean Code Cookbook",
    description: "Practical recipes for writing clean, maintainable, and efficient code in modern software projects.",
    comment: "In Reading",
    link: "https://www.oreilly.com/library/view/clean-code-cookbook/9781098139484/",
    image: "src/assets/BooksCovers/BS13550-OREILLY-Clean-Code-Cookbook-836545324.jpeg",
  },
  {
    title: "Learning Systems Thinking",
    description: "A hands-on guide to understanding and applying systems thinking in software and organizational contexts.",
    comment: "In Reading.",
    link: "https://www.oreilly.com/library/view/learning-systems-thinking/9781098139644/",
    image: "src/assets/BooksCovers/400w-4248732087.jpeg",
  },
  {
    title: "The Staff Engineer's Path",
    description: "A guide to growing as a technical leader, navigating influence, and driving impact as a staff engineer.",
    comment: "Pending.",
    link: "https://www.oreilly.com/library/view/the-staff-engineers/9781098118731/",
    image: "src/assets/BooksCovers/the-staff-engineer-s-path-3044587758.jpeg",
  },
  {
    title: "The Software Architect Elevator",
    description: "Insights and strategies for bridging the gap between technical and business leadership in software architecture.",
    comment: "Pending.",
    link: "https://www.oreilly.com/library/view/the-software-architect/9781492040835/",
    image: "src/assets/BooksCovers/the-software-architect-elevator-1598937182.jpeg",
  },
  {
    title: "Learning Git",
    description: "A practical introduction to Git, covering version control fundamentals and collaborative workflows.",
    comment: "Pending.",
    link: "https://www.oreilly.com/library/view/learning-git/9781098139767/",
    image: "src/assets/BooksCovers/Learning-Git-Cover-2034997224.jpeg",
  },
];

function Books() {
  return (
    <div className="books-container">
      <h1>Books catalog</h1>
      <ul className="books-list">
        {books.map((book, idx) => (
          <li key={idx} className="book-card">
            <img src={book.image || "./src/assets/book-placeholder.png"} alt={book.title} className="book-image" />
            <div className="book-info">
              <h2>{book.title}</h2>
              <p><strong>Description:</strong> {book.description}</p>
              <p><strong>Comments:</strong> {book.comment}</p>
              <a href={book.link} target="_blank" rel="noopener noreferrer" className="book-link">
                Look Book
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;