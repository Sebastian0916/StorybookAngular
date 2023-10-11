import { PaletteOptions } from '@mui/material';
declare module '@mui/material/styles' {
    interface PaletteOptions {
        other?: {
            divider: string
        };
    }
}
export const paletteChip = {
    primary: {
        main: "#E4ECF4",
        dark: "#BCD0E3",
    },
    secondary: {
        main: "#E0F7FA"
    }
}
const palette: PaletteOptions =  {
    other:{
        divider:"rgba(0,0,0, 0.12)"
    },

    
    primary: {
        50: "#E4ECF4",
        100: "#BCD0E3",
        200: "#8FB1D0",
        300: "#6392BD",
        light: "#417AAE",
        main: "#2063A0",
        600: "#1C5B98",
        700: "#18518E",
        800: "#134784",
        dark: "#0B3573",
        A100: "#A5C5FF",
        A200: "#72A4FF",
        A400: "#3F83FF",
        A700: "#2572FF",
        contrastText: "#ffffff",    
    },
    secondary: {
        50: "#E0F7FA",
        100: "#B3EBF2",
        200: "#80DEEA",
        300: "#4DD0E1",
        light: "#26C6DA",
        main: "#00BCD4",
        600: "#00B6CF",
        700: "#00ADC9",
        800: "#00A5C3",
        dark: "#0097B9",
        A100: "#E2F9FF",
        A200: "#AFEEFF",
        A400: "#7CE3FF",
        A700: "#63DDFF",
        contrastText: "#ffffff",
    },
    error: {
        50: "#F9E8E8",
        100: "#F1C7C7",
        200: "#E8A1A1",
        300: "#DF7B7B",
        light: "#D85F5F",
        main: "#D14343",
        600: "#CC3D3D",
        700: "#C63434",
        800: "#C02C2C",
        dark: "#B51E1E",
        A100: "#FFECEC",
        A200: "#FFB9B9",
        A400: "#FF8686",
        A700: "#FF6D6D",
        contrastText: "#ffffff"
    },
    warning: {
        50: "#FFF0E0",
        100: "#FEDAB3",
        200: "#FDC280",
        300: "#FCAA4D",
        light: "#FC9726",
        main: "#FB8500",
        600: "#FA7D00",
        700: "#FA7200",
        800: "#F96800",
        dark: "#F85500",
        A100: "#FFFFFF",
        A200: "#FFF1EB",
        A400: "#FFCCB8",
        A700: "#FFBA9F",
        contrastText: "#ffffff"
    },
    info: {
        50: "#E6F3F8",
        100: "#C0E2EE",
        200: "#96CFE2",
        300: "#6CBCD6",
        light: "#4DADCE",
        main: "#2D9FC5",
        600: "#2897BF",
        700: "#228DB8",
        800: "#1C83B0",
        dark: "#1172A3",
        A100: "#D4EFFF",
        A200: "#A1DCFF",
        A400: "#6ECAFF",
        A700: "#54C1FF",
        contrastText: "#ffffff"

    },
    success: {
        50: "#F2F9E7",
        100: "#DDEFC4",
        200: "#C7E49D",
        300: "#B1D975",
        light: "#A0D158",
        main: "#8FC93A",
        600: "#87C334",
        700: "#7CBC2C",
        800: "#72B525",
        dark: "#60A918",
        A100: "#EDFFDE",
        A200: "#D2FFAB",
        A400: "#B6FF78",
        A700: "#A9FF5E",
        contrastText: "#ffffff"
    },
    grey: {
        50: "#FAFBFF",
        100: "#F4F6FA",
        200: "#EDEFF5",
        300: "#E6E8F0",
        400: "#D8DAE5",
        500: "#C1C4D6",
        600: "#8F95B2",
        700: "#696F8C",
        800: "#474D66",
        900: "#101840",
        A100: "#D8DAE5",
        A200: "#C1C4D6",
        A400: "#696F8C",
        A700: "#101840",
    },
    text: {
        primary: "#101840de",
        secondary: "#10184099",
        disabled: "#10184061",
    },
    action: {
        active: "rgba(16, 24, 64, 0.54)",
        hover: "rgba(16, 24, 64, 0.04)",
        selected: "rgba(16, 24, 64, 0.08)",
        disabled: "rgba(16, 24, 64, 0.26)",
        disabledBackground: "rgba(16, 24, 64, 0.12)",
        focus: "rgba(16, 24, 64, 0.12)",
    },
    background: {
        default: '#f5f5f5',
        paper: "#fff",
    },
    common: {
        black: '#000',
        white: '#fff'
    },
    divider: "rgba(16,24,64,0.12)",
};
export default palette  