import { useEffect, useState } from "react"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

const UserOrders = () => {

    const [latestOrders, setLatestOrders] = useState([])

    useEffect(() => {
        const getOrders = () => {
            
        }
        latestOrders > 0 && getOrders();
    }, [latestOrders])

    return (
        <Container>
            
        </Container>
    )
}

export default UserOrders
