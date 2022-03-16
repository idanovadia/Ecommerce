import styled from "styled-components"
import { useSelector } from "react-redux";
import UserOrder from "./UserOrder";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 80%;
`

const UserOrders = () => {

    const latestOrders = useSelector(
        (state) => state.user.currentUser.latestOrders
    );
    return (
        <Container>
            {latestOrders.map(order => (
                <UserOrder order = {order} key={order._id}/>
            ))}
        </Container>
    )
}

export default UserOrders
