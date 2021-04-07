import Styled from "styled-components/macro";

export const Container = Styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = Styled.h1`
  font-family: Arial;
  font-size: 50px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;

  @media screen and (min-width: 480px){
    font-size: 100px;
  }
`;
