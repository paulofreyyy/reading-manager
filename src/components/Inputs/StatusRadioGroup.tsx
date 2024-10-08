import { Box, FormControl, FormLabel, RadioGroup, Typography } from '@mui/material';
import { FaRegCircleCheck } from "react-icons/fa6";

interface Props {
    status: 'Concluído' | 'Não lido' | 'Lendo' | 'Abandonado';
    setStatus: (status: 'Concluído' | 'Não lido' | 'Lendo' | 'Abandonado') => void;
}

export const StatusRadioGroup = ({ status, setStatus }: Props) => {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ mb: 1 }}>Status</FormLabel>
            <RadioGroup
                row
                aria-label="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value as 'Concluído' | 'Não lido' | 'Lendo' | 'Abandonado')}
                sx={{
                    flexDirection: 'row',
                    gap: 2,
                }}
            >
                {['Não lido', 'Lendo', 'Concluído', 'Abandonado'].map((value) => (
                    <Box
                        key={value}
                        onClick={() => setStatus(value as 'Concluído' | 'Não lido' | 'Lendo' | 'Abandonado')}
                        sx={{
                            border: '1px solid #E2DFDF',
                            borderRadius: '10px',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            userSelect: 'none',
                            borderColor: status === value ? '#6F2CFF' : '#E2DFDF',
                            color: status === value ? '#6F2CFF' : 'black',
                            position: 'relative',
                        }}
                    >
                        {status === value && (
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
                        <Typography fontSize='0.9rem'>{value}</Typography>
                    </Box>
                ))}
            </RadioGroup>
        </FormControl>
    );
};