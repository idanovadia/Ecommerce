import styled from "styled-components"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductDetails from "./ProductDetails";


const Container = styled.div`

`;

const ProductInOrder = ({product}) => {
    return (
        <Container>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Product</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <ProductDetails product={product} />
                </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}

export default ProductInOrder
