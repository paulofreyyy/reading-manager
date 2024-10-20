import { Box, Drawer, Typography } from "@mui/material"
interface Props {
    open: boolean;
    onClose: () => void;
}

export const ReadingBookDrawer = ({
    open,
    onClose
}: Props) => {
    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={onClose}
        >
            <form >
                <Box display="flex" flexDirection="column" gap={4} width={500} p={5}>
                    <Typography variant="h6" fontWeight={600} textAlign='center' mb={2}>Leitura atual</Typography>

                </Box>
            </form>
        </Drawer>
    )
}