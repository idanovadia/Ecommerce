import styled from "styled-components"

const Container = styled.div`
    
    height: 60vh;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    flex-direction:column ;
`

const Title = styled.h1`
    font-size: 70px;
    color: #fcbd8a;
    margin-bottom: 30px;
`;

const Desc = styled.h3`
    font-size: 22px;
    /* display:flex; */
    /* align-items: center;
    justify-content:center; */
    height: 100px;
    text-align:center ;
`;

const Massage = ({massage,innerMassage}) => {
    return (
        <Container>
            <Title>{massage}</Title>
            <Desc>{innerMassage}</Desc>
        </Container>
    )
}

export default Massage
