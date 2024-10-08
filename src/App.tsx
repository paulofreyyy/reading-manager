import React, { useState } from 'react';
import BookForm, { Book } from './components/BookForm';
import BookList from './components/BookList';
import { Container, Typography } from '@mui/material';

const App: React.FC = () => {
    const [books, setBooks] = useState<Book[]>(() => {
        const savedBooks = localStorage.getItem('books');
        return savedBooks ? JSON.parse(savedBooks) : [];
    });

    const addBook = (book: Book) => {
        const updatedBooks = [...books, book];
        setBooks(updatedBooks);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
    };

    const updateStatus = (title: string) => {
        const updatedBooks = books.map(book => {
            if (book.title === title) {
                return {
                    ...book,
                    status: book.status === 'lido' ? 'não lido' as 'lido' | 'não lido' : 'lido' as 'lido' | 'não lido'
                };
            }
            return book;
        });

        setBooks(updatedBooks);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
    };


    const updateCurrentPage = (title: string, page: number) => {
        const updatedBooks = books.map(book =>
            book.title === title ? { ...book, currentPage: page } : book
        );
        setBooks(updatedBooks);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
    };

    const removeBook = (title: string) => {
        const updatedBooks = books.filter(book => book.title !== title);
        setBooks(updatedBooks);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h2" align="center" gutterBottom>
                Gerenciador de Livros
            </Typography>
            <BookForm addBook={addBook} />
            <BookList
                books={books}
                updateStatus={updateStatus}
                updateCurrentPage={updateCurrentPage}
                removeBook={removeBook}
            />
        </Container>
    );
};

export default App;
