import { Box, Stack, Typography } from "@mui/material"
import { NextReadingBook } from "./NextReadingBook"
import { useEffect, useState } from "react";
import { getBooks } from "../../../../services/book.service";
import { Book } from "../../../../entity/books.entity";

export const NextReadings = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        // Busca os livros no localStorage ao montar o componente
        const storedBooks = getBooks();
        const tbrBooks = storedBooks.filter(book => book.status === 'Não lido')
        setBooks(tbrBooks);
    }, []);

    return (
        <Box mb={5}>
            <Typography variant="body1" fontWeight={600} mb={2}>Próximas leituras</Typography>

            <Stack direction='row' spacing={2}>
                {books.map(book => (
                    <NextReadingBook
                        key={book.title}
                        image={book.image}
                        title={book.title}
                        author={book.author}
                    />

                ))}
            </Stack>
        </Box>
    )
}