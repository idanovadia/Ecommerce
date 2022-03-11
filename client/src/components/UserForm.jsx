import { Email, LocationCity, Person, PersonOutline } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import UserOrders from './UserOrders';

const Container = styled.div`
    margin: 30px 0px;
    height: 70vh;
    display: flex;
    /* justify-content: center; */
`;

const Left = styled.div`
    flex: 1;
    border-right: 0.5px solid gray;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Profile = styled.div`
    flex:2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* border-bottom: 0.5px solid gray; */
`;

const ImgProfile = styled.img`
    flex:1;
    margin: 10px;
    border-radius: 50%;
    height: 150px;
    width: 150px;
`;

const Menu = styled.div`
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const User = styled.span`
    font-size: 22px;
    font-weight: bold;
`;

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Detail = styled.span`
    font-size: 20px;
    margin: 10px 0px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

const OrdersTitle = styled.h1`
  font-size:32px ; 
`;

const Right = styled.div`
    flex:2;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

function UserForm() {

    const user = useSelector(state => state.user.currentUser);

    return (
        <Container>
            <Left>
                <Profile>
                    <ImgProfile src={user.img} />
                    <User>{user.username}</User>
                </Profile>
                <Menu>
                    <DetailsContainer>
                        <Detail><Person style={{marginRight:"10px"}} />{user.firstName}</Detail>
                        <Detail><PersonOutline style={{marginRight:"10px"}} />{user.lastName}</Detail>
                        <Detail><Email style={{marginRight:"10px"}} />{user.email}</Detail>
                        <Detail><LocationCity style={{marginRight:"10px"}} />{user.city} , {user.street}</Detail>
                    </DetailsContainer>
                </Menu>
            </Left>
            <Right>
                <OrdersTitle>LATEST ORDERS</OrdersTitle>
                <UserOrders/>
            </Right>
        </Container>
    )
}

export default UserForm
