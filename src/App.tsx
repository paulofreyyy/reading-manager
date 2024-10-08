import React, { useState } from 'react';
import BookForm from './components/BookForm';
import { Box, Container, Fab } from '@mui/material';
import { LuPlusCircle } from "react-icons/lu";
import { BookTable } from './components/Table/BookTable';
import { Book } from './entity/books.entity';

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

            {/* Tabela todos os livros */}
            <BookTable
                books={books}
                removeBook={removeBook}
            />
        </Container>
    );
};

export default App;
