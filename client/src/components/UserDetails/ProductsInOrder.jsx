import styled from "styled-components"
import ProductInOrder from "./ProductInOrder";

const Container = styled.div`
    margin: 20px 0px;
`;

const ProductsInOrder = ({products}) => {
    return (
        <Container>
            {products.map((product) =>(
                <ProductInOrder product={product}/>
            ))}
        </Container>
    )
}

export default ProductsInOrder
