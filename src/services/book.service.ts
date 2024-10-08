import { Book } from '../entity/books.entity';

// Função para buscar os livros salvos no localStorage
export const getBooks = (): Book[] => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
};

// Função para adicionar um novo livro
export const addBook = (book: Book, books: Book[], setBooks: (books: Book[]) => void) => {
    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
};

// Função para remover um livro
export const removeBook = (title: string, books: Book[], setBooks: (books: Book[]) => void) => {
    const updatedBooks = books.filter(book => book.title !== title);
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
};
