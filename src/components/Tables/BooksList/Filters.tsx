import { Popover, FormControl, FormLabel, RadioGroup, Box, Typography } from '@mui/material';
import { FaRegCircleCheck } from "react-icons/fa6";

interface Option {
    label: string;
    value: string;
}

interface Props {
    open: boolean; // Indica se o popover está aberto
    anchorEl: HTMLElement | null; // Elemento âncora para o popover
    handleClose: () => void; // Função para fechar o popover
    selectedValue: string;
    setSelectedValue: (value: string) => void;
    options: Option[];
    title: string;
}

export const FiltersPopover = ({ open, anchorEl, handleClose, title, options, selectedValue, setSelectedValue }: Props) => {
    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <FormControl component="fieldset" sx={{ m: 2 }}>
                <FormLabel component="legend" sx={{ mb: 1 }}>{title}</FormLabel>
                <RadioGroup
                    aria-label={title}
                    name={title.toLowerCase().replace(' ', '-')}
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                    sx={{
                        flexDirection: 'column', // Alinhamento vertical
                    }}
                >
                    {options.map(({ label, value }) => {
                        return (
                            <Box
                                key={value}
                                onClick={() => setSelectedValue(value)}
                                sx={{
                                    border: '1px solid #E2DFDF',
                                    borderRadius: '10px',
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    userSelect: 'none',
                                    borderColor: selectedValue === value ? '#6F2CFF' : '#E2DFDF',
                                    color: selectedValue === value ? '#6F2CFF' : 'black',
                                    position: 'relative',
                                    mb: 1,
                                }}
                            >
                                {selectedValue === value && (
                                    <Box
                                        position='absolute'
                                        top={-5}
                                        right={-5}
                                        zIndex={1000}
                                        bgcolor={'#FFF'}
                                        color="#6F2CFF"
                                    >
                                        <FaRegCircleCheck />
                                    </Box>
                                )}
                                <Typography fontSize='0.9rem'>{label}</Typography>
                            </Box>
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </Popover>
    );
};