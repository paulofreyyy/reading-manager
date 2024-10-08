import { Box, IconButton, TableCell, TableRow, Toolbar, Tooltip, Typography } from "@mui/material"

interface Props {
    icon: React.ReactNode;
    title: string;
}

export const TableHeaderInfo = ({ icon, title }: Props) => {
    return (
        <TableRow>
            <TableCell colSpan={7} sx={{ p: 0 }}>
                <Toolbar>
                    <Typography variant="body1" fontWeight={700}>{title}</Typography>
                    <Box sx={{ ml: 'auto' }}>
                        <Tooltip title='Ver tudo'>
                            <IconButton
                                sx={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '15px',
                                    lineHeight: "1px",
                                    mr: 2,
                                    color: "#FFF",
                                    bgcolor: '#6F2CFF',
                                    '&:hover': {
                                        bgcolor: '#b28eff',
                                    },
                                }}>
                                {icon}
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </TableCell>
        </TableRow>
    )
}