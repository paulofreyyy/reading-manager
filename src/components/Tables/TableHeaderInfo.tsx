import { Box, IconButton, TableCell, TableRow, Toolbar, Tooltip, Typography } from "@mui/material"
import { BiShowAlt } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";

interface Props {
    title: string;
}

export const TableHeaderInfo = ({ title }: Props) => {
    return (
        <TableRow>
            <TableCell colSpan={7} sx={{ p: 0 }}>
                <Toolbar>
                    <Typography variant="body1" fontWeight={700}>{title}</Typography>
                    <Box sx={{ ml: 'auto' }}>
                        <Tooltip title='Filtros'>
                            <IconButton
                                sx={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '15px',
                                    lineHeight: "1px",
                                    mr: 2,
                                    color: "#FFF",
                                    bgcolor: "#014f86",
                                    "&:hover": {
                                        bgcolor: "#2a6f97",
                                    }
                                }}>
                                <FiFilter />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Ver tudo'>

                            <IconButton
                                sx={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '15px',
                                    lineHeight: "1px",
                                    mr: 2,
                                    color: "#FFF",
                                    bgcolor: "#014f86",
                                    "&:hover": {
                                        bgcolor: "#2a6f97",
                                    }
                                }}>
                                <BiShowAlt />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </TableCell>
        </TableRow>
    )
}