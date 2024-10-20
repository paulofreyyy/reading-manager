import { Box, Card, CardContent, Typography } from "@mui/material"

interface Props {
    cardIcon: React.ReactNode;
    title: string;
    cardValue: number;
}

export const CardItem = ({ cardIcon, title, cardValue }: Props) => {
    return (
        <Card
            variant="outlined"
            sx={{
                width: 280,
                display: "flex",
                alignItems: "center",
                p: 2,
                borderLeft: '5px solid #014f86'
            }}
        >

            <Box
                sx={{
                    bgcolor: '#F8F9FE',
                    borderRadius: '100%',
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: "center",
                    width: 80,
                    height: 80,
                    color: '#014f86',
                }}
            >
                {cardIcon}
            </Box>
            <CardContent>
                <Typography
                    fontSize='1rem'
                    color="#8F9098"
                    noWrap
                >
                    {title}
                </Typography>

                <Typography
                    fontSize='1.5rem'
                    fontWeight={900}
                >
                    {cardValue}
                </Typography>
            </CardContent>
        </Card>
    )
}