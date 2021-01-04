import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: black;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  h1,
  h2,
  h3 {
    font-family: 'Pacifico', cursive;
    padding: 0;
    margin: 0;
  }
  p {    
    padding: 0;
    margin: 0;
  }
  button {
    cursor: pointer;
  }
  input, button {
    font: inherit;
  }
  input[type="number"] {
    --moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    display: none;
  }
  .sk-wave {
    width: 20em;
    height: 10em;
    margin: auto;
    text-align: center;
    font-size: 1em;
  }
  .sk-wave .sk-rect {
    background-color: #299b01;    
    height: 100%;
    width: 1em;
    display: inline-block;
    -webkit-animation: sk-wave-stretch-delay 1.2s infinite ease-in-out;
    animation: sk-wave-stretch-delay 1.2s infinite ease-in-out;
    margin-right: 10px;
  }
  .sk-wave .sk-rect-1 {
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }
  .sk-wave .sk-rect-2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  .sk-wave .sk-rect-3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  .sk-wave .sk-rect-4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  .sk-wave .sk-rect-5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-wave-stretch-delay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }

  @keyframes sk-wave-stretch-delay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
`;
