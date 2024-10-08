import { Box } from "@mui/material"
import { CardItem } from "./CardItem"
import { LuBookCopy } from "react-icons/lu";
import { LuBookOpenCheck } from "react-icons/lu";
import { LuBookMarked } from "react-icons/lu";
import { LuBookX } from "react-icons/lu";
import { getBooks } from "../../services/book.service";
import { useEffect, useState } from "react";
import { Book } from "../../entity/books.entity";

export const CustomCards = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        // Busca os livros no localStorage ao montar o componente
        const storedBooks = getBooks();
        setBooks(storedBooks);
    }, []);

    // Calcular os valores com base no status dos livros
    const totalBooks = books.length;
    const completedBooks = books.filter(book => book.status === 'Concluído').length;
    const tbrBooks = books.filter(book => book.status === 'TBR').length;
    const abandonedBooks = books.filter(book => book.status === 'Abandonado').length;

    return (
        <Box display='flex' gap={5} mb={5}>
            <CardItem
                cardIcon={
                    <LuBookCopy size={30} />
                }
                title="Livros totais"
                cardValue={totalBooks}
            />
            <CardItem
                cardIcon={
                    <LuBookOpenCheck size={30} />
                }
                title="Concluídos"
                cardValue={completedBooks}
            />
            <CardItem
                cardIcon={
                    <LuBookMarked size={30} />
                }
                title="TBR"
                cardValue={tbrBooks}
            />
            <CardItem
                cardIcon={
                    <LuBookX size={30} />
                }
                title="Abandonados"
                cardValue={abandonedBooks}
            />
        </Box>

    )
}