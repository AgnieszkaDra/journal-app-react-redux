import 'styled-components';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    heading: string;
    text: string;
    background: string;
    toggleTheme: string;
  }
}

export const lightTheme: DefaultTheme = {
  body: 'white',
  heading: '#333333',
  text: 'gray',
  background: 'rgb(139, 147, 245)',
  toggleTheme: 'rgb(34, 49, 209)',
};

export const darkTheme: DefaultTheme = {
  body: 'white',
  heading: 'rgba(30, 14, 98, 1)',
  text: 'smoke',
  background: 'rgb(2, 10, 89)',
  toggleTheme: 'rgb(248, 240, 21)',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};