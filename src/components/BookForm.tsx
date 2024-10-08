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
    const [status, setStatus] = useState<'Concluído' | 'TBR' | 'Lendo' | 'Abandonado'>('TBR');
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [image, setImage] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [type, setType] = useState<'Físico' | 'Audio-Book' | 'E-book'>('Físico');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addBook({ title, author, genre, status, totalPages, currentPage, image, rating, type });
        setTitle('');
        setAuthor('');
        setGenre('');
        setTotalPages(0);
        setCurrentPage(0);
        setImage('');
        setRating(0);
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
                    {/* Adicionar imagem */}
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
                        onChange={(e) => setStatus(e.target.value as 'Concluído' | 'TBR' | 'Lendo' | 'Abandonado')}
                        fullWidth
                    >
                        <MenuItem value="TBR">TBR</MenuItem>
                        <MenuItem value="Lendo">Lendo</MenuItem>
                        <MenuItem value="Concluído">Concluído</MenuItem>
                        <MenuItem value="Abandonado">Abandonado</MenuItem>
                    </TextField>
                    <TextField
                        select
                        label="Tipo de livro"
                        value={type}
                        onChange={(e) => setType(e.target.value as 'Físico' | 'Audio-Book' | 'E-book')}
                        fullWidth
                    >
                        <MenuItem value="Físico">Físico</MenuItem>
                        <MenuItem value="Audio-Book">Audio-Book</MenuItem>
                        <MenuItem value="E-book">E-book</MenuItem>
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
