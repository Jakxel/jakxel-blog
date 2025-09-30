import "../styles/pages/Books.css";

type Book = {
  title: string;
  description: string;
  comment: string;
  link: string;
  image?: string; // URL of the book cover
};

const books: Book[] = [
  {
    title: "Learning Python, 5th Edition",
    description: "A comprehensive guide to learning Python from scratch, covering syntax, data structures, and object-oriented programming.",
    comment: "Excellent for reinforcing Python fundamentals and practicing with clear examples.",
    link: "https://www.amazon.com/dp/1449355730",
    image: "./src/assets/learning-python.png",
  },
  {
    title: "JavaScript: The Definitive Guide, 7th Edition",
    description: "A complete reference for modern JavaScript, including ES6 and object-oriented programming.",
    comment: "Ideal as a full reference resource for JavaScript.",
    link: "https://www.amazon.com/dp/1491952024",
    image: "./src/assets/js-definitive.png",
  },
  {
    title: "Designing Data-Intensive Applications",
    description: "Explains how to build scalable, reliable, and maintainable systems using databases, queues, and distributed architectures.",
    comment: "Essential for understanding software architecture and databases.",
    link: "https://www.amazon.com/dp/1449373321",
    image: "./src/assets/data-intensive.png",
  },
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    description: "Principles and practices for writing clean and maintainable code, with examples in Java.",
    comment: "A must-read guide for any developer looking to improve code quality.",
    link: "https://www.amazon.com/dp/0132350882",
    image: "./src/assets/clean-code.png",
  },
  {
    title: "Effective Java, 3rd Edition",
    description: "Practical advice for writing robust, efficient, and readable Java code, with best design practices.",
    comment: "Perfect for Java developers who want to master the language.",
    link: "https://www.amazon.com/dp/0134685997",
    image: "./src/assets/effective-java.png",
  },
];

function Books() {
  return (
    <div className="books-container">
      <h1>Catálogo de Libros</h1>
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