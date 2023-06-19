import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

  ${reset}
  :root {
    --main-color : #55BDB3;
    --main-disabled-color: #D9D9D9;
    --main-text-color : #333333; 
    --sub-text-color : #767676;
  }

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  ul, ol, li {
        list-style: none;
  }
  a {
      color: inherit;
      text-decoration: none;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  body{
    font-family: 'SUITE-Regular';
    font-weight: 400;
  }

  button{
    background: inherit;
    padding: 0;
    border:none;
    box-shadow:none;
    overflow:visible;
    cursor:pointer
  }

  .a11y-hidden {
    position: relative;
    z-index: -1px;
    display: inline-block;
    overflow: hidden;
    width: 1px;
    height: 1px;
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    word-break: initial;
    word-wrap: initial;
  }
`;

export default GlobalStyled;
