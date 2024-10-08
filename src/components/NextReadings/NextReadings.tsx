import { Box, Stack, Typography } from "@mui/material"
import { NextReadingBook } from "./NextReadingBook"
import { useEffect, useState } from "react";
import { Book } from "../../entity/books.entity";
import { getBooks } from "../../services/book.service";

export const NextReadings = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        // Busca os livros no localStorage ao montar o componente
        const storedBooks = getBooks();
        const tbrBooks = storedBooks.filter(book => book.status === 'TBR')
        setBooks(tbrBooks);
    }, []);

    return (
        <Box mb={5}>
            <Typography variant="body1" fontWeight={600} mb={2}>Próximas leituras</Typography>

            <Stack direction='row' spacing={2}>
                {books.map(book => (
                    <NextReadingBook
                        image={book.image}
                        title={book.title}
                        author={book.author}
                    />

                ))}
            </Stack>
        </Box>
    )
}