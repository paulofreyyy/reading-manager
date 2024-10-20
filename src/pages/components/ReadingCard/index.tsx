import { Box, LinearProgress, Paper, Typography } from "@mui/material"
import { Book } from "../../../entity/books.entity"

interface Props {
    readingBook?: Book | null;
}

export const ReadingCard = ({
    readingBook
}: Props) => {
    const progress = readingBook && readingBook.currentPage
        ? (readingBook.currentPage / readingBook.totalPages) * 100
        : 0

    return (
        <Box bgcolor='#FFF' p={2} borderRadius={2} component={Paper} display='flex' gap={2} alignItems='center'>
            <Box
                component='img'
                borderRadius={2}
                src={
                    readingBook?.image ? readingBook.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsmmND4V8TKm5UTAtJLvhqaFNgJeHKv-3rQ&s'
                }
                alt=""
                width={40}
                height={50}

            />
            <Box >
                <Typography mb={1}>{readingBook?.title}</Typography>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
        </Box>
    )
}