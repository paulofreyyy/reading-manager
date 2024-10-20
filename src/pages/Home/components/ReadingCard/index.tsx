import { Box, LinearProgress, Paper, Typography } from "@mui/material"
import { Book } from "../../../../entity/books.entity";

interface Props {
    readingBook?: Book | null;
    onClick: () => void;
}

export const ReadingCard = ({
    readingBook,
    onClick
}: Props) => {
    const progress = readingBook && readingBook.currentPage
        ? (readingBook.currentPage / readingBook.totalPages) * 100
        : 0

    return (
        <Box bgcolor='#FFF' p={2} borderRadius={1} component={Paper} display='flex' gap={2} alignItems='center' onClick={onClick} sx={{ cursor: "pointer" }}>
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
                <Typography display='flex' justifyContent='end' fontWeight={600}>{progress.toFixed(2)}%</Typography>
            </Box>
        </Box>
    )
}