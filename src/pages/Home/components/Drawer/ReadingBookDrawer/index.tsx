import { Box, Button, Drawer, LinearProgress, TextField, Typography } from "@mui/material"
import { Book } from "../../../../../entity/books.entity";
import { useState } from "react";
interface Props {
    open: boolean;
    onClose: () => void;
    readingBook: Book | null;
    books: Book[];
    setBooks: (books: Book[]) => void;
    updateBook: (book: Book) => void
}

export const ReadingBookDrawer = ({
    open,
    onClose,
    readingBook,
    updateBook
}: Props) => {
    const [updatedBook, setUpdatedBook] = useState<Book>(readingBook as Book);
    const progress = readingBook && readingBook.currentPage
        ? (readingBook.currentPage / readingBook.totalPages) * 100
        : 0

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newValue = name === 'currentPage' ? Number(value) : value;
        setUpdatedBook((prevBook) => ({ ...prevBook, [name]: newValue }));
    };


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        updateBook(updatedBook)
    }
    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={onClose}
        >
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap={4} width={500} p={5}>
                    <Typography variant="h6" fontWeight={600} textAlign='center' mb={2}>Leitura atual</Typography>

                    <Box display='flex' justifyContent='center' gap={5}>
                        <Box
                            component="img"
                            src={readingBook?.image}
                            alt="Prévia da Imagem"
                            width={150}
                            height={220}
                            alignSelf='center'
                            borderRadius={5}
                            sx={{
                                objectFit: "fill",
                            }}
                        />

                        <Box justifySelf='start' gap={2}>
                            <Typography variant="h6" fontWeight={600} >{readingBook?.title}</Typography>
                            <Typography>{readingBook?.author}</Typography>
                            <Typography>{readingBook?.genre}</Typography>
                            <Typography>{readingBook?.totalPages} páginas</Typography>
                            <Typography>{readingBook?.type}</Typography>
                        </Box>

                    </Box>

                    <Box display='flex' alignItems='center' gap={2}>
                        <LinearProgress variant="determinate" value={progress} sx={{
                            width: '100%',
                            height: 10,
                            borderRadius: 2
                        }} />
                        <Typography fontWeight={600}>{progress.toFixed(2)}%</Typography>
                    </Box>

                    <Box display='flex' flexDirection='column' gap={5}>
                        <Box display='flex' gap={2}>
                            <TextField
                                type="string"
                                label="Página atual"
                                value={updatedBook?.currentPage}
                                onChange={handleInputChange}
                                fullWidth
                                required
                                focused
                                slotProps={{
                                    input: {
                                        sx: {
                                            color: "#3C3C43",
                                            borderRadius: "14px",
                                            fontWeight: '600',
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                borderColor: '#3C3C43',
                                            }
                                        },
                                    },
                                    inputLabel: {
                                        sx: {
                                            "&.Mui-focused": {
                                                color: "#3C3C43",

                                            }
                                        }
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                size='large'
                                sx={{
                                    fontWeight: 700,
                                    borderRadius: 10,
                                    width: "70%",
                                    alignSelf: 'center',
                                    bgcolor: "#014f86",
                                    "&:hover": {
                                        bgcolor: "#2a6f97",
                                    }
                                }}
                            >
                                Atualizar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </form>
        </Drawer>
    )
}