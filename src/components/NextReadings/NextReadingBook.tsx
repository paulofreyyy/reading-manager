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
                src={image ? image : 'https://img.freepik.com/vetores-premium/elementos-de-design-de-capa-de-livro-antigo_443748-495.jpg'}
                borderRadius={5}
                width={150}
                height={180}
            />
            <Typography fontSize='1rem' fontWeight={600} noWrap maxWidth={150}>{title}</Typography>
            <Typography fontSize='0.85rem' color="gray" noWrap maxWidth={150}>{author}</Typography>
        </Box>
    )
}