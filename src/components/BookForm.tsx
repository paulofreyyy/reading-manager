import React, { useState } from 'react';
import { TextField, Button, Box, Drawer, Typography, Tooltip } from '@mui/material';
import { Book } from '../entity/books.entity';
import { CustomRadioGroup } from './Inputs/CustomRadioGroup';
import { AlertMessage } from './AlertMessage';

interface Props {
    addBook: (book: Book) => void;
    toggleDrawer: (newOpen: boolean) => () => void;
    open: boolean;
}

export const CreateBookForm = ({ addBook, toggleDrawer, open }: Props) => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [genre, setGenre] = useState<string>('Romance');
    const [status, setStatus] = useState<'Concluído' | 'Não lido' | 'Lendo' | 'Abandonado'>('Não lido');
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [image, setImage] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [type, setType] = useState<'Físico' | 'Audio-Book' | 'E-book'>('Físico');
    const [alertOpen, setAlertOpen] = useState<boolean>(false);


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

        // Verifica se totalPages é igual a 0
        if (totalPages === 0) {
            setAlertOpen(true);
            return;
        }

        console.log(status, genre)
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

    const handleReset = () => {
        setTitle('');
        setAuthor('');
        setGenre('');
        setTotalPages(0);
        setCurrentPage(0);
        setImage('');
        setRating(0);
    }

    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={toggleDrawer(false)}
        >
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <Box display="flex" flexDirection="column" gap={4} width={500} p={5}>
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
                                                top: -5,
                                                right: -5,
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
                        focused
                        required
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

                    <TextField
                        label="Autor"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        fullWidth
                        focused
                        required
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

                    {/* Componente personalizado para os status */}
                    <CustomRadioGroup
                        label="Gênero"
                        value={genre}
                        setValue={setGenre}
                        options={['Romance', 'Fantasia', 'Terror', 'Ficção', 'Não Ficção', 'Distopia', 'Suspense', 'Dark Romance', 'Autoajuda', 'Religioso', 'Biografia']}
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
                        type="string"
                        label="Páginas Totais"
                        value={totalPages}
                        onChange={(e) => setTotalPages(Number(e.target.value))}
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
                    {status === 'Lendo' && (
                        <TextField
                            type="string"
                            label="Página Atual"
                            value={currentPage}
                            onChange={(e) => setCurrentPage(Number(e.target.value))}
                            fullWidth
                            focused
                            required
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
                    )}
                    <Box display='flex' gap={5}>
                        <Button
                            type="reset"
                            variant="contained"
                            size='large'
                            sx={{
                                fontWeight: 700,
                                borderRadius: 10,
                                width: "70%",
                                alignSelf: 'center',
                                bgcolor: "#860101",
                                '&:hover': {
                                    bgcolor: "#972a2a",
                                }

                            }}
                            onClick={toggleDrawer(false)}
                        >
                            Cancelar
                        </Button>
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
                            Adicionar
                        </Button>
                    </Box>
                </Box>
            </form>

            {/* Componente de alerta */}
            <AlertMessage
                open={alertOpen}
                message='Total de páginas do livro não pode ser 0.'
                onClose={() => setAlertOpen(false)}
            />
        </Drawer>
    );
};