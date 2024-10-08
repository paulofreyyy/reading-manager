import React from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { Book } from '../entity/books.entity';

interface BookItemProps {
    book: Book;
    updateStatus: (title: string) => void;
    updateCurrentPage: (title: string, page: number) => void;
    removeBook: (title: string) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, updateStatus, updateCurrentPage, removeBook }) => {
    return (
        <Card variant="outlined" style={{ marginBottom: '16px' }}>
            <CardContent>
                <Typography variant="h6">{book.title} - {book.author}</Typography>
                <Typography variant="body2">Gênero: {book.genre}</Typography>
                <Typography variant="body2">Status: {book.status}</Typography>
                <Typography variant="body2">Páginas Totais: {book.totalPages}</Typography>
                <Typography variant="body2">Página Atual: {book.currentPage}</Typography>
                <Button onClick={() => updateStatus(book.title)} variant="outlined" style={{ marginRight: '8px' }}>
                    Marcar como {book.status === 'lido' ? 'não lido' : 'lido'}
                </Button>
                <TextField
                    type="number"
                    placeholder="Atualizar Página"
                    onChange={(e) => updateCurrentPage(book.title, Number(e.target.value))}
                    style={{ marginRight: '8px' }}
                />
                <Button onClick={() => removeBook(book.title)} variant="outlined" color="error">
                    Remover
                </Button>
            </CardContent>
        </Card>
    );
};

export default BookItem;
