import { Table, TableContainer, TableHead, TableRow, Paper, TableCell, TableBody, Button, Menu, MenuItem, Typography, Box, TablePagination, Chip } from "@mui/material"
import { Book } from "../../../entity/books.entity";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { getBooks } from "../../../services/book.service";
import { TableHeaderInfo } from "../TableHeaderInfo";

interface Props {
    removeBook: (title: string) => void
}

export const BookTable = ({ removeBook }: Props) => {
    const [books] = useState<Book[]>(getBooks);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Aplicar paginação aos livros
    const paginatedBooks = books.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <TableContainer component={Paper} sx={{ mb: 5 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    {/* Cabeçalho de informações da tabela */}
                    <TableHeaderInfo
                        title="Livros"
                        books={books}
                    />

                    {/* Cabeçalhos de campos da tabela */}
                    <TableRow>
                        <TableCell>Livro</TableCell>
                        <TableCell>Gênero</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Autor(a)</TableCell>
                        <TableCell>Páginas Totais</TableCell>
                        <TableCell>Páginas Lidas</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {paginatedBooks.map((book) => (
                        <TableRow key={book.title}>
                            <TableCell>
                                <Box display='flex' alignItems='center' gap={2}>
                                    <Box
                                        component='img'
                                        borderRadius={2}
                                        src={
                                            book.image ? book.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsmmND4V8TKm5UTAtJLvhqaFNgJeHKv-3rQ&s'
                                        }
                                        alt=""
                                        width={40}
                                        height={50}

                                    />
                                    <Box>
                                        <Typography variant="body1" fontWeight={600}>{book.title}</Typography>
                                        <Typography fontSize='0.85rem' color="gray">{book.type}</Typography>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>{book.genre}</TableCell>
                            <TableCell>
                                <Chip label={book.status} sx={{ width: 120, fontWeight: 600 }} />

                            </TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.totalPages}</TableCell>
                            <TableCell>{book.currentPage}</TableCell>
                            <TableCell>
                                {/* Botão para expandir menu de opções */}
                                <Button
                                    onClick={handleClick}
                                    sx={{
                                        color: "black",
                                    }}
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
                                    <MenuItem
                                        sx={{ gap: 1 }}
                                        onClick={() => {
                                            removeBook(book.title);
                                            handleClose();
                                        }}
                                    >
                                        <MdDelete />
                                        <Typography variant='body2'>Deletar</Typography>
                                    </MenuItem>
                                </Menu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={books.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    )
}