import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.primary} white;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 1.6rem;
    line-height: 1.5;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 20px;
    }
  }

  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.fonts.lato};
    margin: 0 0 1.5rem 0;
    letter-spacing: .2rem;
    text-transform: uppercase;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
  }

  h2 {
    font-size: 2.8rem;
    text-align: center;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    margin: 0;
    letter-spacing: .1rem;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    letter-spacing: .1rem;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  hr {
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
  }

  button:hover {
    cursor: pointer;
  }

  /* Utils */
  .container {
    width: min(90%, 105rem);
    margin: 0 auto;
  }

  .section {
    padding: 5rem 0;
  }

  .section-description {
    text-align: center;
    margin-bottom: 5rem;
  }

  .error {
    color: ${({ theme }) => theme.colors.error};
  }

  .scroll-hidden {
    overflow: hidden;
  }

  /* ANIMATIONS */
  /* ----------------------------------------------
  Generated by AnimatiSS
  Licensed under FreeBSD License
  URL: https://xsgames.co/animatiss
  Twitter: @xsgames_
---------------------------------------------- */
  .scale-up-top{animation:scale-up-top 0.6s; } @keyframes scale-up-top{0%{transform:scale(.5);transform-origin:center top}100%{transform:scale(1);transform-origin:center top}}

  .scale-up-center{animation:scale-up-center 0.6s; } @keyframes scale-up-center{ 0%{transform:scale(.5)} 100%{transform:scale(1)} }

  .scale-up-vertical-center{animation:scale-up-vertical-center 0.3s} @keyframes scale-up-vertical-center{0%{transform:scaleY(0)}100%{transform:scaleY(1)}}
`;