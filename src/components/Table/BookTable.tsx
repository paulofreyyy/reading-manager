import { Table, TableContainer, TableHead, TableRow, Paper, TableCell, TableBody, Button, Menu, MenuItem, Typography } from "@mui/material"
import { BiShowAlt } from "react-icons/bi";
import { TableHeaderInfo } from "./TableHeaderInfo";
import { Book } from "../../entity/books.entity";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


interface Props {
    books: Book[]
}

export const BookTable = ({ books }: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    {/* Cabeçalho da tabela */}
                    <TableHeaderInfo
                        icon={<BiShowAlt />}
                        title="Livros lidos"
                    />

                    <TableRow>
                        <TableCell>Título</TableCell>
                        <TableCell>Gênero</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Autor</TableCell>
                        <TableCell>Páginas Totais</TableCell>
                        <TableCell>Páginas Lidas</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {books.map((book) => (
                        <TableRow>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.genre}</TableCell>
                            <TableCell>{book.status}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.totalPages}</TableCell>
                            <TableCell>{book.currentPage}</TableCell>
                            <TableCell>
                                {/* Botão para expandir menu de opções */}
                                <Button
                                    onClick={handleClick}
                                >
                                    <SlOptionsVertical />
                                </Button>

                                {/* Menu de opções */}
                                <Menu
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    elevation={1}
                                >
                                    <MenuItem sx={{ gap: 1 }}>
                                        <FaEye />
                                        <Typography variant="body2">Detalhes</Typography>
                                    </MenuItem>
                                    <MenuItem sx={{ gap: 1 }}>
                                        <MdEdit />
                                        <Typography variant='body2'>Editar</Typography>
                                    </MenuItem>
                                    <MenuItem sx={{ gap: 1 }}>
                                        <MdDelete />
                                        <Typography variant='body2'>Deletar</Typography>
                                    </MenuItem>
                                </Menu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}