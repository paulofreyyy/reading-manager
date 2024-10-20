import { useState } from 'react';
import { Box, Container, Fab } from '@mui/material';
import { LuPlusCircle } from "react-icons/lu";
import { addBook as addBookService, removeBook as removeBookService, updateBook } from '../../services/book.service';
import { Book } from '../../entity/books.entity';
import { PageTitle } from '../../components/PageTitle';
import { CustomCards } from '../../components/Cards/CustomCards';
import { CreateBookForm } from '../../components/BookForm';
import { BooksToBuyTable } from '../../components/Tables/WishList/BooksToBuyTable';
import { BookTable } from '../../components/Tables/BooksList/BookTable';
import { NextReadings } from './components/NextReadings/NextReadings';
import { ReadingBookDrawer } from './components/Drawer/ReadingBookDrawer';

export const Home = () => {
    const [books, setBooks] = useState<Book[]>(() => {
        const savedBooks = localStorage.getItem('books');
        return savedBooks ? JSON.parse(savedBooks) : [];
    });

    const [readingBook] = useState<Book | null>(() => {
        const fetchReadingBook = books.find(book => book.status === 'Lendo');
        return fetchReadingBook ? fetchReadingBook : null;
    })

    const [drawerOpen, setDrawerOpen] = useState(false); 
    const [readingBookDrawerOpen, setReadingBookDrawerOpen] = useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setDrawerOpen(newOpen);
    };

    const addBook = (book: Book) => {
        addBookService(book, books, setBooks);
    };
    const updatedBook = (book: Book) => {
        updateBook(book, books, setBooks);  
    };

    const removeBook = (title: string) => {
        removeBookService(title, books, setBooks); 
    };

    return (
        <Container>
            {/* Titulo da página */}
            <PageTitle user='Paulo' readingBook={readingBook} readingCardClick={() => setReadingBookDrawerOpen(true)} />

            {/* Cards */}
            <CustomCards />


            {/* Tabela todos os livros */}
            <BookTable
                removeBook={removeBook}
            />

            {/* Próximas Leituras */}
            <NextReadings />

            <Box display='flex' justifyContent='space-between' gap={5}>
                {/* Lista de desejos */}
                <BooksToBuyTable />
            </Box>

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

                <Fab
                    aria-label="add"
                    onClick={toggleDrawer(true)}
                    sx={{
                        borderRadius: 5,
                        bgcolor: "#014f86",
                        "&:hover": {
                            bgcolor: "#2a6f97",
                        }
                    }}
                >
                    <LuPlusCircle size={30} color='#FFF' />
                </Fab>
            </Box>

            {/* Formulário para criação de novo livro */}
            <CreateBookForm addBook={addBook} toggleDrawer={toggleDrawer} open={drawerOpen} />

            {/* Drawer que exibe dados da leitura atual e atualiza página atual */}
            <ReadingBookDrawer
                open={readingBookDrawerOpen}
                onClose={() => setReadingBookDrawerOpen(false)}
                readingBook={readingBook}
                books={books}
                setBooks={setBooks}
                updateBook={updatedBook}
            />
        </Container>
    );
};