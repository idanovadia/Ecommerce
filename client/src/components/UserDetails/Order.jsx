import styled from "styled-components";
import ProductsInOrder from "./ProductsInOrder";

const Container = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Details = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Detail = styled.h1`
    font-size:15px;
    margin-bottom: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Order = ({order}) => {
    return (
        <Container>
            <Details>
                <Detail>ORDER NUMBER</Detail>
                <Detail>{order._id}</Detail>
            </Details>
            <Details>
                <Detail>SHIPMENT ADDRESS</Detail>
                <Detail>{order.summery.address.toUpperCase()}</Detail>
            </Details>
            <Details>
                <Detail>TOTAL</Detail>
                <Detail>$ {order.summery.total}</Detail>
            </Details>
            <Details>
                <Detail>DATE OF ORDER</Detail>
                <Detail>{new Date(order.updatedAt).toISOString().split('T')[0]}</Detail>
            </Details>
            <ProductsInOrder products={order.products}/>
        </Container>
    )
}

export default Order
