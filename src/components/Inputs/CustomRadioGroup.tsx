import { Box, FormControl, FormLabel, RadioGroup, Typography } from '@mui/material';
import { FaRegCircleCheck } from "react-icons/fa6";

interface Props<T> {
    label: string; // Label para o grupo de rádio
    value: T; // Valor selecionado
    setValue: (value: T) => void; // Função para definir o valor
    options: T[]; // Opções disponíveis
}

export const CustomRadioGroup = <T extends string>({ label, value, setValue, options }: Props<T>) => {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ mb: 1 }}>{label}</FormLabel>
            <RadioGroup
                row
                aria-label={label}
                name={label.toLowerCase().replace(/\s/g, '-')}
                value={value}
                onChange={(e) => setValue(e.target.value as T)}
                sx={{
                    flexDirection: 'row',
                    gap: 2,
                }}
            >
                {options.map((option) => (
                    <Box
                        key={option}
                        onClick={() => setValue(option)}
                        sx={{
                            border: '1px solid #E2DFDF',
                            borderRadius: '10px',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            userSelect: 'none',
                            borderColor: value === option ? '#014f86' : '#E2DFDF',
                            color: value === option ? '#014f86' : 'black',
                            position: 'relative',
                        }}
                    >
                        {value === option && (
                            <Box
                                position='absolute'
                                top={-5}
                                right={-5}
                                zIndex={1000}
                                bgcolor={'#FFF'}
                                color="#014f86"
                            >
                                <FaRegCircleCheck />
                            </Box>
                        )}
                        <Typography fontSize='0.9rem'>{option}</Typography>
                    </Box>
                ))}
            </RadioGroup>
        </FormControl>
    );
};
