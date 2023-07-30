import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


input, button {
        background-color: transparent;
        border: none;
        outline: none;
        color: inherit;
    }

input {
    font-family: "Gowun Dodum", sans-serif;
    ::placeholder{
        font-size: 16px;
        color: #d3d3d3;
    }

}

button {
    font-family: "Gowun Dodum", sans-serif;
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

ol, ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
}


`;
