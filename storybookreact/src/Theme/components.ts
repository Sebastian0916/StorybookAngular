import React from "react";
import type {} from "@mui/x-data-grid/themeAugmentation";
import { Components } from "@mui/material";
import {
  InfoRounded,
  CheckCircleRounded,
  WarningRounded,
  ErrorRounded,
} from "@mui/icons-material";
import { palette } from "./palette";

declare module "@mui/material/Radio" {
  interface RadioPropsSizeOverrides {
    large: true;
  }
}
declare module "@mui/material/Checkbox" {
  interface CheckboxPropsSizeOverrides {
    large: true;
  }
}
export const components: Components = {
  MuiDataGrid: {
    defaultProps: {
      columnHeaderHeight: 35,
      rowHeight: 32,
      density: "compact",
    },
    styleOverrides: {
      iconButtonContainer: {
        fontSize: 16,
      },
      columnHeaderTitle: {
        fontFamily: "Roboto",
        fontWeight: 500,
        fontSize: 13,
        lineHeight: 1.5,
        letterSpacing: 0.17,
      },
      cell: {
        fontFamily: "Roboto",
        fontWeight: 300,
        fontSize: 12,
        lineHeight: 1.5,
        letterSpacing: 0.17,
        // COMPONENTES DENTRO DE CELDAS
        ".MuiButtonBase-root": {
          lineHeight: 0,
          textTransform: "capitalize",
        },
        // CELDA ENFOCADA
        ".MuiDataGrid-cell": {
          "&:focus": {
            outline: "transparent",
            borderWidth: 0,
          },
        },
      },
      // BOTOM MENU EN LAS CABECERA DE CADA COLUMNA
      menuIconButton: {
        svg: {
          fontSize: "16px",
        },
      },
      menu: {
        svg: {
          fontSize: "16px !important",
        },
        ".MuiMenuItem-root": {
          minHeight: "28px",
          height: "28px",
        },
      },
      pinnedRows: {
        borderTop: "1px solid rgba(228, 236, 244, 1)",
      },
      root: {
        // FONT-SIZE DE CELDA EN MODO EDICION
        ".MuiInputBase-root": {
          fontFamily: "Roboto",
          fontWeight: 300,
          fontSize: 12,
          letterSpacing: 0.17,
          borderRadius: "0px",
        },
        // CELDA FOCUS
        ".Mui-focused, .MuiOutlinedInput-notchedOutline": {
          borderWidth: "0px !important",
        },
        // TAMAÑO PEQUEÑO
        "&.MuiDataGrid-root--densityCompact": {
          ".MuiSvgIcon-root": {
            fontSize: 16,
          },
          ".MuiDataGrid-cellCheckbox": {
            ".MuiButtonBase-root": {
              padding: 4,
            },
          },
        },
      },
    },
  },
  MuiRating: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      sizeSmall: {
        fontSize: 18,
      },
      sizeMedium: {
        fontSize: 24,
      },
      sizeLarge: {
        fontSize: 30,
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        height: "48px",
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      root: {
        boxShadow:
          "0px 3px 1px -2px rgba(24, 39, 75, 0.20), 0px 2px 2px 0px rgba(24, 39, 75, 0.14), 0px 1px 5px 0px rgba(24, 39, 75, 0.12)",
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: {
        boxShadow:
          " 0px 2px 1px -2px rgba(24, 39, 75, 0.20), 0px 1px 1px -1px rgba(24, 39, 75, 0.14), 0px 1px 3px 0px rgba(24, 39, 75, 0.12)",
        ".MuiBackdrop-root": {
          backgroundColor: "#f0f0f099",
          backdropFilter: "blur(2px) !important",
        },
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        paddingTop: 8,
        paddingBottom: 8,
      },
    },
  },
  MuiCheckbox: {
    variants: [
      {
        props: { size: "large" },
        style: {
          padding: 9,
          "& .MuiSvgIcon-fontSizeLarge": {
            height: 24,
            width: 24,
            fontSize: 24,
          },
        },
      },
      {
        props: { size: "small" },
        style: {
          padding: 3,
        },
      },
      {
        props: { size: "medium" },
        style: {
          padding: 4,
        },
      },
    ],
    defaultProps: {
      size: "small",
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      sizeSmall: {
        height: 32,
      },
      sizeMedium: {
        height: 38,
      },
      sizeLarge: {
        height: 48,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      sizeSmall: {
        height: 18,
      },
      sizeMedium: {
        height: 22,
      },
      filled: {
        backgroundColor: palette.grey?.[100],
      },
      icon: {
        color: palette.action?.active,
        opacity: "26%",
      },
      root: {
        fontFamily: "Roboto",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "10px",
        letterSpacing: "0.15px",
        height: "inherit",
        borderRadius: 4,
        ".MuiChip-deleteIconXsmall": {
          height: 12,
          width: 12,
        },
        ".MuiChip-deleteIconSmall": {
          height: 16,
          widht: 16,
        },
        ".MuiChip-deleteIconMedium": {
          height: 20,
          widht: 20,
        },
      },
    },
  },
  MuiAlert: {
    defaultProps: {
      iconMapping: {
        success: React.createElement(CheckCircleRounded),
        error: React.createElement(ErrorRounded),
        warning: React.createElement(WarningRounded),
        info: React.createElement(InfoRounded),
      },
    },
    styleOverrides: {
      root: {
        paddingY: 0.5,
        paddingX: 2,
        alignItems: "center",
        border: "none",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      startIcon: {
        marginLeft: 2,
      },
      endIcon: {
        marginRight: 2,
      },
      sizeSmall: {
        height: 26,
        ".MuiSvgIcon-fontSizeSmall": {
          height: 16,
          width: 16,
        },
        ".MuiSvgIcon-fontSizeMedium": {
          height: 18,
          width: 18,
        },
        ".MuiSvgIcon-fontSizeLarge": {
          height: 20,
          width: 20,
        },
      },
      sizeMedium: {
        height: 32,
        ".MuiSvgIcon-fontSizeSmall": {
          height: 16,
          width: 16,
        },
        ".MuiSvgIcon-fontSizeMedium": {
          height: 18,
          width: 18,
        },
        ".MuiSvgIcon-fontSizeLarge": {
          height: 20,
          width: 20,
        },
      },
      sizeLarge: {
        height: 38,
        ".MuiSvgIcon-fontSizeSmall": {
          height: 16,
          width: 16,
        },
        "&.MuiSvgIcon-fontSizeMedium": {
          height: 18,
          width: 18,
        },
      },
    },
  },
  MuiButtonGroup: {
    defaultProps: {
      size: "small",
    },
  },
  MuiFab: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      circular: {
        boxShadow:
          "0px 1px 18px 0px rgba(24, 39, 75, 0.12), 0px 6px 10px 0px rgba(24, 39, 75, 0.14), 0px 3px 5px -1px rgba(24, 39, 75, 0.20)",
        "&.MuiFab-sizeSmall": {
          height: 36,
          width: 36,
          ".MuiSvgIcon-fontSizeSmall": {
            height: 20,
            width: 20,
          },
        },
        "&.MuiFab-sizeMedium": {
          height: 48,
          width: 48,

          "& .MuiSvgIcon-fontSizeMedium": {
            height: 22,
            width: 22,
          },
        },
        "&.MuiFab-sizeLarge": {
          height: 56,
          width: 56,
          "& .MuiSvgIcon-fontSizeLarge": {
            height: 24,
            width: 24,
          },
        },
      },
      extended: {
        boxShadow:
          " 0px 1px 18px 0px rgba(24, 39, 75, 0.12), 0px 6px 10px 0px rgba(24, 39, 75, 0.14), 0px 3px 5px -1px rgba(24, 39, 75, 0.20)",
        "&.MuiFab-sizeSmall": {
          height: 32,
          ".MuiSvgIcon-fontSizeSmall": {
            height: 20,
            width: 20,
            marginRight: 4,
          },
        },
        "&.MuiFab-sizeMedium": {
          height: 38,
          "& .MuiSvgIcon-fontSizeMedium": {
            height: 22,
            width: 22,
            marginRight: 4,
          },
        },
        "&.MuiFab-sizeLarge": {
          height: 48,
          "& .MuiSvgIcon-fontSizeLarge": {
            height: 24,
            width: 24,
            marginRight: 4,
          },
        },
      },
    },
  },
  MuiFormControl: {
    defaultProps: {
      size: "small",
      margin: "none",
    },
  },
  MuiFormHelperText: {
    defaultProps: {
      margin: "dense",
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      fontSizeLarge: {
        width: 35,
        height: 35,
        fontSize: 35,
      },
      fontSizeMedium: {
        width: 20,
        height: 20,
        fontSize: 20,
      },
      fontSizeSmall: {
        width: 16,
        height: 16,
        fontSize: 16,
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      sizeSmall: {
        padding: 3,
      },
      sizeMedium: {
        padding: 12,
      },
      sizeLarge: {
        padding: 17,
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      sizeSmall: {
        height: 38,
      },
    },
  },
  MuiInputBase: {
    defaultProps: {
      margin: "none",
    },
    styleOverrides: {
      root: {
        "&.MuiInput-underline": {
          marginTop: 9,
        },
        ".MuiOutlinedInput-input.MuiInputBase-inputSizeSmall": {
          paddingBlock: 5.95,
        },
        ".MuiOutlinedInput-input": {
          paddingBlock: 14,
        },
        ".MuiFilledInput-input.MuiInputBase-inputSizeSmall": {
          paddingBlock: "none",
        },
        ".MuiFilledInput-input": {
          paddingTop: 22,
          paddingBottom: 6,
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        borderColor: "rgba(16, 24, 64, 0.23)",
      },
    },
  },
  MuiAutocomplete: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: {
        "&.MuiAutocomplete-root .MuiOutlinedInput-root": {
          padding: "6px 14px 6px 10px",
        },
        "&.MuiAutocomplete-root .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
          paddingBlock: 3.5,
          paddingRight: 14,
          ".MuiIconButton-sizeSmall .MuiAutocomplete-popupIndicator": {
            padding: 5,
          },
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        overflow: "initial",
        boxShadow:
          "0px 2px 1px -2px rgba(24, 39, 75, 0.20), 0px 1px 1px -1px rgba(24, 39, 75, 0.14), 0px 1px 3px 0px rgba(24, 39, 75, 0.12)",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      asterisk: {
        color: "#D14343",
      },
      root: {
        display: "flex",
        gap: ".2rem",
        flexDirection: "row-reverse",
      },
      outlined: {
        "&.MuiInputLabel-outlined.MuiInputLabel-sizeSmall ": {
          transform: "translate(14px,7px) scale(1)",
        },
        "&.MuiInputLabel-outlined ": {
          transform: "translate(14px, 15px) scale(1)",

          "&.MuiInputLabel-shrink": {
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
      },
    },
    defaultProps: {
      margin: "dense",
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: 12,
      },
    },
  },
  MuiRadio: {
    variants: [
      {
        props: { size: "small" },
        style: {
          padding: 3,
        },
      },
      {
        props: { size: "medium" },
        style: {
          padding: 4,
        },
      },
      {
        props: { size: "large" },
        style: {
          padding: 9,
          "& .MuiSvgIcon-fontSizeLarge": {
            width: 24,
            height: 24,
            fontSize: 24,
          },
        },
      },
    ],
    defaultProps: {
      size: "small",
    },
  },
  MuiSwitch: {
    variants: [
      {
        props: { size: "small" },
        style: {
          height: 22,
          ".MuiSwitch-switchBase": {
            padding: 3,
          },
        },
      },
    ],
    defaultProps: {
      size: "small",
    },
  },
  MuiTextField: {
    defaultProps: {
      size: "small",
      margin: "none",
    },
  },
  MuiList: {
    defaultProps: {
      dense: true,
    },
  },
  MuiMenuItem: {
    defaultProps: {
      dense: true,
    },
  },
  MuiTable: {
    defaultProps: {
      size: "small",
    },
  },
};
