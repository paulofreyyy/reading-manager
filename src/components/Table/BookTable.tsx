import { Table, TableContainer, TableHead, TableRow, Paper, TableCell, TableBody } from "@mui/material"
import { BiShowAlt } from "react-icons/bi";
import { TableHeaderInfo } from "./TableHeaderInfo";
import { Book } from "../../entity/books.entity";

interface Props {
    books: Book[]
}

export const BookTable = ({ books }: Props) => {
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}