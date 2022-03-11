
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UserForm from '../components/UserForm';


const Container = styled.div`
    height: 100vh;
`

const UserDetails = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <UserForm/>
            <Footer/>
        </Container>
    )
}

export default UserDetails
