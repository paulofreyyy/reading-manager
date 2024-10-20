import { Box, Typography } from "@mui/material"
import { Book } from "../entity/books.entity"
import { useEffect, useState } from "react";
import { ReadingCard } from "../pages/Home/components/ReadingCard";

interface Props {
    user: string
    books: Book[];
    readingCardClick: () => void
}

export const PageTitle = ({
    user,
    books,
    readingCardClick

}: Props) => {
    const [readingBook, setReadingBook] = useState<Book | null>(null)

    useEffect(() => {
        const fetchBook = books.find(book => book.status === 'Lendo');
        setReadingBook(fetchBook || null);
    }, [readingBook])

    return (
        <Box py={5} display='flex' alignItems='center' justifyContent='space-between'>
            <Typography display='flex' gap={1} variant="h5" fontWeight={700}>
                Olá, <Typography color="#014f86" variant="h5" fontWeight={700}>{user}!</Typography>
            </Typography>

            <ReadingCard
                readingBook={readingBook}
                onClick={readingCardClick}
            />
        </Box>
    )
}