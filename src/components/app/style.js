import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;
    color: ${(props) => props.theme.colorBlackForText};

    .visually-hidden {
      position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    }
  }
`;
