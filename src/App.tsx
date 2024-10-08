import React, { useState } from 'react';
import BookForm from './components/BookForm';
import { Box, Container, Fab } from '@mui/material';
import { LuPlusCircle } from "react-icons/lu";
import { BookTable } from './components/Table/BookTable';
import { Book } from './entity/books.entity';
import { PageTitle } from './components/PageTitle';
import { CustomCards } from './components/Cards/CustomCards';
import { addBook as addBookService, removeBook as removeBookService } from './services/book.service';
import { NextReadings } from './components/NextReadings/NextReadings';


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
        addBookService(book, books, setBooks);  // Usando o serviço para adicionar livros
    };

    const removeBook = (title: string) => {
        removeBookService(title, books, setBooks);  // Usando o serviço para remover livros
    };

    return (
        <Container>
            {/* Titulo da página */}
            <PageTitle user='Paulo' />

            {/* Cards */}
            <CustomCards />


            {/* Tabela todos os livros */}
            <BookTable
                removeBook={removeBook}
            />

            {/* Próximas Leituras */}
            <NextReadings />

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

            {/* Formulário para criação de novo livro */}
            <BookForm addBook={addBook} toggleDrawer={toggleDrawer} open={drawerOpen} />
        </Container>
    );
};

export default App;
