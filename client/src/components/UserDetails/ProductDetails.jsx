import styled from "styled-components";


const Container = styled.div`
    display:flex;
    justify-content:space-between;
`;

const Left = styled.div`
    flex: 1;
    margin-right:10px ;
`;

const ProductImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Right = styled.div`
    flex: 2;
    display:flex;
    flex-direction:column;
    margin: 7px 0px;
`;

const Title = styled.h1`
    font-size: 18px;
    margin-bottom: 10px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
`;

const DetailContainer = styled.div`
  display:flex;
  justify-content:space-between;
`;

const Detail = styled.p`
    font-size: 14px;
`;
 

const ProductDetails = ({product}) => {
    return (
        <Container>
            <Left>
                <ProductImg src={product.img} />
            </Left>
            <Right>
                <Title>{product.title}</Title>
                <Details>
                    <DetailContainer>
                        <Detail>Product ID</Detail>
                        <Detail>{product._id}</Detail>
                    </DetailContainer>
                    <DetailContainer>
                        <Detail>Product Size</Detail>
                        <Detail>{product.size.toUpperCase()}</Detail>
                    </DetailContainer>
                    <DetailContainer>
                        <Detail>Product Color</Detail>
                        <Detail>{product.color.toUpperCase()}</Detail>
                    </DetailContainer>
                    <DetailContainer>
                        <Detail>Product Quantity</Detail>
                        <Detail>{product.quantity}</Detail>
                    </DetailContainer>
                    <DetailContainer>
                        <Detail>Product Price</Detail>
                        <Detail>$ {product.price}</Detail>
                    </DetailContainer>
                </Details>
            </Right>
        </Container>
    )
}

export default ProductDetails
