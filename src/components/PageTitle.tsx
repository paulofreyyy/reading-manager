import { Box, Typography } from "@mui/material"
import { Book } from "../entity/books.entity"
import { ReadingCard } from "../pages/Home/components/ReadingCard";

interface Props {
    user: string
    readingBook?: Book | null;
    readingCardClick: () => void
}

export const PageTitle = ({
    user,
    readingBook,
    readingCardClick

}: Props) => {
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