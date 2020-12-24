import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
  body {
    margin: 0;
    padding-left: 20%;
    line-height: 1;
    color: #202020;
    background-color: #8e8a8d ;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

export const StoryHeaders = styled.h3`
    background-color: #ff6600;
    color: black;
    border-collapse: separate;
    text-indent: initial;
    white-space: normal;
    line-height: normal;
    font-weight: bold;
    font-size: medium;
    font-style: normal;
    color: -internal-quirk-inherit;
    border-spacing: 2px;
    font-variant: normal;
`

export const StoriesContainerWrapper = styled.main`
    font-family: Verdana, Geneva, sans-serif;
    font-size: 10pt;
    color: #828282;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    -webkit-border-horizontal-spacing: 0px;
    -webkit-border-vertical-spacing: 0px;
    width: 85%;
    background-color: rgb(246, 246, 239);

`;