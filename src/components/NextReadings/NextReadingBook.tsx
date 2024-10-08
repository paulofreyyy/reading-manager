import { Box, Typography } from "@mui/material"

interface Props {
    image?: string;
    title: string;
    author: string;
}

export const NextReadingBook = ({ image, title, author }: Props) => {
    return (
        <Box>
            <Box
                component='img'
                src={image ? image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsmmND4V8TKm5UTAtJLvhqaFNgJeHKv-3rQ&s'}
                borderRadius={8}
                width={150}
                height={180}
                sx={{
                    objectFit: 'cover'
                }}
            />
            <Typography fontSize='1rem' fontWeight={600} noWrap maxWidth={150}>{title}</Typography>
            <Typography fontSize='0.85rem' color="gray" noWrap maxWidth={150}>{author}</Typography>
        </Box>
    )
}