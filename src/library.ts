import type {Book, Library} from "./types"

export const addBook = (
  library: Library,
  book: Book
) : Library => {
  return {
    ...library,
    books:[
      ...library.books, book
    ]
  }
}

