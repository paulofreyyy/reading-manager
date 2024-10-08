import { Box, Card, CardContent, Typography } from "@mui/material"

interface Props {
    cardIcon: React.ReactNode;
    title: string;
    cardValue: string;
}

export const CardItem = ({ cardIcon, title, cardValue }: Props) => {
    return (
        <Card
            variant="outlined"
            sx={{
                width: 320,
                display: "flex",
                alignItems: "center",
                p: 2,
                borderLeft: '5px solid #6F2CFF'
            }}
        >

            <Box
                sx={{
                    bgcolor: '#F8F9FE',
                    // padding: 4,
                    borderRadius: '100%',
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: "center",
                    width: 80,
                    height: 80,
                    color: '#6F2CFF',
                }}
            >
                {cardIcon}
            </Box>
            <CardContent>
                <Typography
                    variant="h6"
                    color="#8F9098"
                >
                    {title}
                </Typography>

                <Typography
                    variant="h4"
                    fontWeight={900}
                >
                    {cardValue}
                </Typography>
            </CardContent>
        </Card>
    )
}