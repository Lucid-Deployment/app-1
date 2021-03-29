import React from 'react';
import { GlobalStyles, css, theme } from 'twin.macro';
import '../styles.scss';
import { Global } from '@emotion/react';

const MyGlobalStyles = () => (
  <Global
    styles={css`
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      html {
        height: 100%;
        box-sizing: border-box;
        touch-action: manipulation;
        font-feature-settings: 'case' 1, 'rlig' 1, 'calt' 0;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      html,
      body {
        font-family: ${theme`fontFamily.sans` instanceof Array
          ? theme`fontFamily.sans`.join(', ')
          : theme`fontFamily.sans`};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme`colors.white`};
        color: ${theme`colors.black`};
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
      }

      a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
    `}
  />
);

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    <MyGlobalStyles />
    {children}
  </div>
);

export default Layout;
