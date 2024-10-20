import { Box, IconButton, TableCell, TableRow, Toolbar, Tooltip, Typography } from "@mui/material"
import { BiShowAlt } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { FiltersPopover } from "./BooksList/Filters";
import { useState } from "react";

interface Props {
    title: string;
}

export const TableHeaderInfo = ({ title }: Props) => {
    const [_, setFilterOpen] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState<string>('');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // Função para alterar a visibilidade do filtro
    const toggleFilter = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget); // Alterna a visibilidade
        setFilterOpen(prev => !prev);
    };

    // Função para lidar com a mudança de papel
    const handleGenreChange = (genre: string) => {
        setSelectedGenre(genre);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setFilterOpen(false);
    };

    const open = Boolean(anchorEl);

    // Mapeamento de UserRole para opções
    const genreOptions = [
        { label: 'Romance', value: 'Romance' },
        { label: 'Fantasia', value: 'Fantasia' },
        { label: 'Terror', value: 'Terror' },
        { label: 'Ficção', value: 'Ficção' },
        { label: 'Não Ficção', value: 'Não Ficção' },
        { label: 'Distopia', value: 'Distopia' },
        { label: 'Suspense', value: 'Suspense' },
        { label: 'Dark Romance', value: 'Dark Romance' },
        { label: 'Autoajuda', value: 'Autoajuda' },
        { label: 'Religioso', value: 'Religioso' },
        { label: 'Biografia', value: 'Biografia' },
    ];

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
                                }}
                                onClick={toggleFilter}
                            >
                                <FiFilter />
                            </IconButton>
                        </Tooltip>

                        {/* Menu de filtro por Tipo de usuário */}
                        <FiltersPopover
                            anchorEl={anchorEl}
                            handleClose={handleClose}
                            open={open}
                            selectedValue={selectedGenre}
                            setSelectedValue={handleGenreChange}
                            title="Tipo de usuário"
                            options={genreOptions}
                        />

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