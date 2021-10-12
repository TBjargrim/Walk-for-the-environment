import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    transition: all 0.50s linear;
  }
  `

export const Styles = {
    PrimaryPink: '#FF1AB3',
    PrimaryBlue:'#81D2EF',
    ColorWhite:'#F8F3F6',
    ColorBlack:'#251821',
    BackgroundPopUp:'#D8D1D6',
    BackgroundProgressBar:'linearGradient(358CAB,92C8FA)',
}
export const Buttons ={
    Background:'linear-gradient(180deg, #358CAB 0%, #92C8FA 100%);',
    Color:'#F8F3F6',
}