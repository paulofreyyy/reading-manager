import { Box, Typography } from "@mui/material"

interface Props {
    user: string
}

export const PageTitle = ({ user }: Props) => {
    return (
        <Box py={5}>
            <Typography display='flex' gap={1} variant="h5" fontWeight={700}>
                Olá, <Typography color="#6F2CFF" variant="h5" fontWeight={700}>{user}!</Typography>
            </Typography>
        </Box>
    )
}