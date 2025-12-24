import books from "../data/bookData";

export function getBookInfo(book) {
  return books[book];
}

export function getBookList() {
  return Object.values(books);
}
