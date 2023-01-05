import styled from "styled-components";


const Container = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    color: white;
    font-size: 16px;
    font-weight: 500;
`



const Announcement = () => {
  return (
    <Container >
        Super Deal! Free Shipping on orders Over $50
    </Container>    
  )
}

export default Announcement
