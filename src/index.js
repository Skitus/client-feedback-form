import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import App from './App';
import "./fonts/ApercuArabicPro-Medium.ttf"
import "./index.css";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
    media: {
        phone: "(max-width: 576px)",
        tablet: "(max-width: 1040px) and (min-width: 576px)"
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
    <Global/>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
);
