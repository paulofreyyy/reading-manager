import { Box } from "@mui/material"
import { CardItem } from "./CardItem"
import { PiBooksFill } from "react-icons/pi";

export const CustomCards = () => {
    return (
        <Box>
            <CardItem
                cardIcon={
                    <PiBooksFill size={30} />
                }
                title="Livros totais"
                cardValue="100"
            />
        </Box>

    )
}