import React from "react";
import styled from "styled-components";
function HomePage() {

  const HeaderNest = styled.div`
    padding: 10px 20px;
    font-size: 16px;
    border: 2px solid #4caf50;
    border-radius: 5px;
    cursor: pointer;
    display:flex;
    justify-content:space-between;
  `;
  const HeadTop = styled.section`
    // background-color: ${(props) => (props.primary ? "#4CAF50" : "gray")};
  `;
  const Left = styled.div`
    background-color: ${(props) => (props.primary ? "#4CAF50" : "blue")};
    padding: 10px 20px;
    font-size: 16px;
    border: 2px solid #4caf50;
    border-radius: 5px;
    cursor: pointer;
    display:inline;
  `;
    const Center = styled.p`
    background-color: ${(props) => (props.primary ? "#4CAF50" : "green")};
    padding: 10px 20px;
    font-size: 16px;
    border: 2px solid #4caf50;
    border-radius: 5px;
    cursor: pointer;
    display:inline;
    `
    const Right = styled.a`
    border:2px solid yellow;
    padding: 10px 20px;
    font-size: 16px;
    border: 2px solid #4caf50;
    border-radius: 5px;
    cursor: pointer;
    `
  return (
    <div>
      <HeaderNest>
        <HeadTop>
          <Left>
            <a href="">About Us</a>
            <a href="">My Acount</a>
            <a href="">Wishlist</a>
            <a href="">Order Tracking</a>
          </Left>
          <Center>Get great device at 50% off</Center>
          <Right>Mobile Language USD</Right>
        </HeadTop>
        {/* <HeadCent></HeadCent>
        <HeadBot></HeadBot> */}
      </HeaderNest>

      {/* <StyledButton primary>Primary Button</StyledButton>
      <StyledButton>Secondary Button</StyledButton> */}
    </div>
  );
}

export default HomePage;
