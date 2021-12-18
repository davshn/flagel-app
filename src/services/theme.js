import theme from 'styled-theming';

//Guarda los colores para los diferentes temas

export const backgroundColor = theme('mode', {
    light: '#ffffff',
    dark: '#121212',
  });

export const buttontextColor = theme('mode', {
    light: '#ffffff',
    dark: '#000000',
});
  
export const buttonColor = theme('mode', {
    light: '#ff480e',
    dark: '#f8d27d',
});

export const buttonShadowColor = theme('mode', {
    light: 'rgba(0, 0, 0, 0.25)',
    dark: 'rgba(242, 227, 187, 0.25)',
  });