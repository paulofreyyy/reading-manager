import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface AlertMessageProps {
    open: boolean;
    message: string;
    onClose: () => void;
}

export const AlertMessage: React.FC<AlertMessageProps> = ({ open, message, onClose }) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
            <Alert onClose={onClose} severity="warning" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};