import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    body {
        margin: 0;
    }
    a {
        text-decoration: none;
        color: black;
    }
`
export default GlobalStyle