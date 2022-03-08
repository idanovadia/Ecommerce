import {Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import styled from 'styled-components';
import "./productCard.css";

const Container = styled.div`
    height: 120px;
    width: 80px;
    margin: 20px;
    display: flex;
    flex-direction: column;
`

const ImageContainer = styled.div`
    flex: 3;
`

const ProductImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    justify-content: space-between;
    margin: 10px 5px;
`

const Title = styled.h2`
    font-size: 22px;
`

const Price = styled.h3`
    font-size: 15px;
`


const ProductCard = ({item}) => {
    return (
        // <Container>
        //     <ImageContainer>
        //         <ProductImg src={img}/>
        //     </ImageContainer>
        //     <InfoContainer>
        //         <Title>{title}</Title>
        //         <Price>{price}</Price>
        //     </InfoContainer>
        // </Container>
        <Card className='card' sx={{ maxWidth: 120 }}>
            <CardMedia 
                className="cardMedia"
                component="img"
                image={item.img}
                alt="product"
            />
            <CardContent className="cardContent">
                <Typography className="typography" gutterBottom component="div">
                {item.title}
                </Typography>
                <Typography className="typography" gutterBottom component="div">
                $ {item.price}
                </Typography>
            </CardContent>
        </Card>
  );
}

export default ProductCard

