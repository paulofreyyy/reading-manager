import React, { useState } from 'react';
import { TextField, Button, Box, Drawer, Typography, Tooltip } from '@mui/material';
import { Book } from '../entity/books.entity';
import { CustomRadioGroup } from './Inputs/CustomRadioGroup';

interface Props {
    addBook: (book: Book) => void;
    toggleDrawer: (newOpen: boolean) => () => void;
    open: boolean;
}

export const CreateBookForm = ({ addBook, toggleDrawer, open }: Props) => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [status, setStatus] = useState<'Concluído' | 'Não lido' | 'Lendo' | 'Abandonado'>('Não lido');
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [image, setImage] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [type, setType] = useState<'Físico' | 'Audio-Book' | 'E-book'>('Físico');

    // Função para converter a imagem em base64 e armazená-la
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string); // Armazena a imagem em base64
            };
            reader.readAsDataURL(file); // Converte o arquivo de imagem em base64
        }
    };

    const handleImageRemove = () => {
        setImage("");
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addBook({ title, author, genre, status, totalPages, currentPage, image, rating, type });
        setTitle('');
        setAuthor('');
        setGenre('');
        setTotalPages(0);
        setCurrentPage(0);
        setImage('');
        setRating(0);
        toggleDrawer(false);
    };

    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={toggleDrawer(false)}
        >
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap={2} width={500} p={5}>
                    <Typography variant="h6" fontWeight={600} textAlign='center' mb={2}>Novo livro</Typography>

                    {/* Exibe um botão de upload de imagem */}
                    <Box display='flex' justifyContent='center'>
                        {!image ? (
                            <Button
                                variant="outlined"
                                component="label"
                                sx={{
                                    border: '1px dashed gray',
                                    color: 'gray',
                                    height: 220,
                                    width: 150,
                                    borderRadius: 5,
                                    textAlign: 'center'
                                }}
                            >
                                Selecione a Imagem
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={handleImageUpload}
                                />
                            </Button>
                        ) : (
                            <Box display='flex' flexDirection='column' position="relative" width={150} height={220}>
                                <Box
                                    component="img"
                                    src={image}
                                    alt="Prévia da Imagem"
                                    width={150}
                                    height={220}
                                    borderRadius={5}
                                    sx={{
                                        objectFit: "fill",
                                    }}
                                />

                                    {/* Botão para remover a imagem */}
                                    <Tooltip title='Remover imagem' placement='top'>
                                        <Button
                                            onClick={handleImageRemove}
                                            size="small"
                                            sx={{
                                                position: 'absolute',
                                                top: 5,
                                                right: 5,
                                                backgroundColor: '#d1153b',
                                                color: 'white',
                                                borderRadius: '50%',
                                                minWidth: 24,
                                                height: 24,
                                            }}
                                        >
                                            X
                                        </Button>
                                    </Tooltip>
                                </Box>

                        )}
                    </Box>

                    <TextField
                        label="Título"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                        required
                    />

                    <TextField
                        label="Autor"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Gênero"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        fullWidth
                        required
                    />

                    {/* Componente personalizado para os status */}
                    <CustomRadioGroup
                        label="Status"
                        value={status}
                        setValue={setStatus}
                        options={['Não lido', 'Lendo', 'Concluído', 'Abandonado']}
                    />

                    {/* Componente personalizado para os tipos de livros */}
                    <CustomRadioGroup
                        label="Tipo de livro"
                        value={type}
                        setValue={setType}
                        options={['Físico', 'Audio-Book', 'E-book']}
                    />

                    <TextField
                        type="number"
                        label="Páginas Totais"
                        value={totalPages}
                        onChange={(e) => setTotalPages(Number(e.target.value))}
                        fullWidth
                        required
                    />
                    <TextField
                        type="number"
                        label="Página Atual"
                        value={currentPage}
                        onChange={(e) => setCurrentPage(Number(e.target.value))}
                        fullWidth
                        required
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Adicionar Livro
                    </Button>
                </Box>
            </form>
        </Drawer>
    );
};