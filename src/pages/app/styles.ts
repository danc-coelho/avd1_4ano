import { createGlobalStyle } from "styled-components/macro";

export const Reset = createGlobalStyle`
  *{
    border: 0;
    margin: 0;
    padding: 0;
  }

  body{
    background-color: #212121;
  }

  a, a:link, a:visited, a:hover{
    text-decoration: none;
  }

  ul, ol, li{
    list-style: none;
  }

`;
