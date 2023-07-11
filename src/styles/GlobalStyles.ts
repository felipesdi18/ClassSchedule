import{createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background: #313131;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
  }
`