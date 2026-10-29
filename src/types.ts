export type Book ={
  id: number,
  title: string,
  rating?: number
}

export type Library = {
  name: string,
  books: Book[]
}