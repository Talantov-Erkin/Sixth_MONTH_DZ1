import { addBook } from "./library";
import type { Book, Library } from "./types";
import style from "./App.module.css"

export default function App() {

const myLibrary: Library = {
    name: "Моя библиотека",
    books: [
      { id: 1, title: "Чынгыз Айтматов", rating: 5 }
    ]
  };

  const newBook: Book = {
    id: 2,
    title: "Вторая книга",
    rating: 4
  };

  const updatedLibrary = addBook(myLibrary, newBook);



  return (
    <div className={style.vseBudetHorosho}>
      <h1>{updatedLibrary.name}</h1>

      {updatedLibrary.books.map((book) => (
        <p key={book.id}>
          {book.title} — {book.rating ?? "Нет рейтинга"}
        </p>
      ))}
    </div>
  )
}

