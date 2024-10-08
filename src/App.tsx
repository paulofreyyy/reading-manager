import React, { useState } from 'react';
import BookForm, { Book } from './components/BookForm';
import BookList from './components/BookList';
import { Box, Container, Fab } from '@mui/material';
import { LuPlusCircle } from "react-icons/lu";
import { BookTable } from './components/Table/BookTable';

const App: React.FC = () => {
    const [books, setBooks] = useState<Book[]>(() => {
        const savedBooks = localStorage.getItem('books');
        return savedBooks ? JSON.parse(savedBooks) : [];
    });

    const [drawerOpen, setDrawerOpen] = useState(false); // Estado para controle do Drawer

    const toggleDrawer = (newOpen: boolean) => () => {
        setDrawerOpen(newOpen);
    };

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
        <Container>
            <BookForm addBook={addBook} toggleDrawer={toggleDrawer} open={drawerOpen} />

            {/* FAB para incluir novo livro */}
            <Box
                position='fixed'
                bottom={20}
                right={20}
                display='flex'
                flexDirection='column'
                gap={1}
                alignItems='center'
            >

                <Fab color="primary" aria-label="add" onClick={toggleDrawer(true)}>
                    <LuPlusCircle size={30} />
                </Fab>
            </Box>

            {/* <BookList
                books={books}
                updateStatus={updateStatus}
                updateCurrentPage={updateCurrentPage}
                removeBook={removeBook}
            /> */}
            <BookTable
                books={books}
            />
        </Container>
    );
};

export default App;
