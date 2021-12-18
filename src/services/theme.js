import theme from 'styled-theming';

//Guarda los colores para los diferentes temas

export const backgroundColor = theme('mode', {
    light: 'red',
    dark: 'blue',
  });

export const textColor = theme('mode', {
    light: '#293239',
    dark: '#bbcbd8',
  });