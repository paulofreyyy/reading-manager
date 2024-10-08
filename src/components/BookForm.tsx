import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, Drawer } from '@mui/material';
import { Book } from '../entity/books.entity';

interface BookFormProps {
    addBook: (book: Book) => void;
    toggleDrawer: (newOpen: boolean) => () => void;
    open: boolean;
}

const BookForm: React.FC<BookFormProps> = ({ addBook, toggleDrawer, open }) => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [status, setStatus] = useState<'lido' | 'não lido'>('não lido');
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addBook({ title, author, genre, status, totalPages, currentPage });
        setTitle('');
        setAuthor('');
        setGenre('');
        setTotalPages(0);
        setCurrentPage(0);
        toggleDrawer(false);
    };

    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={toggleDrawer(false)}
        >
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="Título"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Autor"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Gênero"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        select
                        label="Status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as 'lido' | 'não lido')}
                        fullWidth
                    >
                        <MenuItem value="não lido">Não Lido</MenuItem>
                        <MenuItem value="lido">Lido</MenuItem>
                    </TextField>
                    <TextField
                        type="number"
                        label="Páginas Totais"
                        value={totalPages}
                        onChange={(e) => setTotalPages(Number(e.target.value))}
                        fullWidth
                        required
                    />
                    <TextField
                        type="number"
                        label="Página Atual"
                        value={currentPage}
                        onChange={(e) => setCurrentPage(Number(e.target.value))}
                        fullWidth
                        required
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Adicionar Livro
                    </Button>
                </Box>
            </form>
        </Drawer>
    );
};

export default BookForm;
