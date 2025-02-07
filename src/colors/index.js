export const white = '#fff';
export const yellow = '#ffd400'
export const orange = '#FFA233';
export const green = '#00ff44';
export const darkGreen = '#006400';
export const darkerGreen = '#004800';
export const gray = '#A4A4A4';
export const black = '#000';
export const red = '#ff0000'

export const theme = {
    white: '#fff',
    yellow: '#ffd400',
    orange: '#FFA233',
    green: '#00ff44',
    darkGreen: '#006400',
    darkerGreen: '#004800',
    gray: '#A4A4A4',
    black: '#000',
    red: '#ff0000',
}

const setCSSVariables = (theme) => {
    const root = document.documentElement;
    Object.keys(theme).forEach((key) => {
        root.style.setProperty(`--${key}`, theme[key]);
    });
};

setCSSVariables(theme);
