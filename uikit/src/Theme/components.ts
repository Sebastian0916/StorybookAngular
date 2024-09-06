import React from "react";
import type {} from "@mui/x-data-grid/themeAugmentation";
import { Components, Theme } from "@mui/material";

import {
  InfoRounded,
  CheckCircleRounded,
  WarningRounded,
  ErrorRounded,
} from "@mui/icons-material";

export const components: Components<Theme> = {
  MuiSelect: {
    styleOverrides: {
      icon: {
        width: 16,
        height: 16,
        top: "calc(50% - .4em)",
      },
     
    },
  },
  MuiSpeedDialIcon: {
    styleOverrides: {
      icon: {
        height: 24,
        width: 24,
      },
    },
  },
  MuiSpeedDialAction: {
    styleOverrides: {
      fab: {
        height: 40,
        width: 40,
      },
    },
  },
  MuiSpeedDial: {
    styleOverrides: {
      fab: {
        height: 56,
        width: 56,
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {},
    },
  },

  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        minHeight: 44,
        height: 44,
      },
    },
  },

  MuiTabs: {
    styleOverrides: {
      root: {
        minHeight: 40,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      labelIcon: {
        paddingBlock: 10,
      },
      root: {
        minHeight: 40,
        textTransform: "none",
      },
    },
  },
  MuiDataGrid: {
    defaultProps: {
      columnHeaderHeight: 35,
      rowHeight: 32,
      density: "compact",
    },
    styleOverrides: {
      columnHeader: {
        minHeight: 22,
        maxHeight: 22,
        lineHeight: 22,
      },
      iconButtonContainer: ({ theme }) => ({
        ...theme.typography.h6,
      }),

      columnHeaderTitle: ({ theme }) => ({
        ...theme.typography.body2,
      }),
      cell: ({ theme }) => ({
        ...theme.typography.body2,

        // COMPONENTES DENTRO DE CELDAS
        baseButton: {
          lineHeight: 0,
          textTransform: "capitalize",
        },
        // CELDA ENFOCADA
        focused: {
          outline: "transparent",
          borderWidth: 0,
        },
      }),
      // BOTON MENU EN LAS CABECERA DE CADA COLUMNA
      menuIconButton: {
        svg: {
          fontSize: "16px",
        },
      },
      menu: {
        svg: {
          fontSize: "16px ",
        },
        menuItem: {
          minHeight: 28,
          height: 28,
        },
      },
      pinnedRows: {
        borderTop: "1px solid rgba(228, 236, 244, 1)",
      },
      root: {
        // FONT-SIZE DE CELDA EN MODO EDICION
        inputBase: {
          fontFamily: "Roboto",
          fontWeight: 300,
          fontSize: 12,
          letterSpacing: 0.17,
          borderRadius: "0px",
        },
        // CELDA FOCUS
        focused: {
          borderWidth: "0px ",
        },
        // TAMAÑO PEQUEÑO
        densityCompact: {
          svgIcon: {
            fontSize: 16,
          },
          cellCheckbox: {
            buttonBase: {
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
      sizeSmall: ({ theme }) => ({
        ...theme.typography.h6,
      }),
      sizeMedium: ({ theme }) => ({
        ...theme.typography.h6,
      }),
      sizeLarge: ({ theme }) => ({
        ...theme.typography.h6,
      }),
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
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: "#424242",
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: {},
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow:
          "0px 1px 5px rgba(24, 39, 75, 0.12), 0px 2px 2px rgba(24, 39, 75, 0.14), 0px 3px 1px -2px rgba(24, 39, 75, 0.2) ",
      },
    },
  },
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: "#f0f0f099",
        backdropFilter: "blur(2px) !important",
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: "8px 16px ",
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: "8px 16px ",
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: "12px 16px ",
      },
    },
  },

  MuiCheckbox: {
    variants: [
      {
        props: { size: "large" },
        style: {
          padding: 9,
          svg: {
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
        width: 32,
      },
      sizeMedium: {
        height: 38,
        width: 38,
      },
      sizeLarge: {
        height: 48,
        width: 48,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      colorPrimary: ({ theme }) => ({
        backgroundColor: theme.palette.chipPrimary.main,
        ":hover": {
          backgroundColor: theme.palette.chipPrimary.dark
        }
      }),
      colorSecondary: ({ theme }) => ({
        backgroundColor: theme.palette.chipSecondary.main,
        ":hover": {
          backgroundColor: theme.palette.chipSecondary.dark
        }
      }),
      colorInfo: ({ theme }) => ({
        backgroundColor: theme.palette.chipInfo.main,
        ":hover": {
          backgroundColor: theme.palette.chipInfo.dark
        }
      }),
      colorWarning: ({ theme }) => ({
        backgroundColor: theme.palette.chipWarning.main,
        ":hover": {
          backgroundColor: theme.palette.chipWarning.dark
        }
      }),
      colorSuccess: ({ theme }) => ({
        backgroundColor: theme.palette.chipSuccess.main,
        ":hover": {
          backgroundColor: theme.palette.chipSuccess.dark
        }
      }),
      colorError: ({ theme }) => ({
        backgroundColor: theme.palette.chipError.main,
        ":hover": {
          backgroundColor: theme.palette.chipError.dark
        }
      }),
      filled: ({ theme }) => ({
        color: theme.palette.chipPrimary.contrastText,
      }),
      icon:{
        opacity: "70%",
      },
      deleteIcon: {
        color: "#5A5E73",
        opacity: "30%",
      },
      deleteIconSmall: {
        height: 16,
        width: 16,
      },
      deleteIconMedium: {
        height: 20,
        width: 20,
      },
      sizeSmall: {
        height: 16,
      },
      sizeMedium: {
        height: 20,
      },
      label: ({ theme }) => ({
        ...theme.typography.caption,
      }),
      root: {
        height: "inherit",
        borderRadius: 4,
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

    variants: [
      {
        props: { variant: "filled" },
        style: {
          color: "#fff",
        },
      },
      {
        props: { variant: "outlined" },
        style: {
          padding: "7px 12px 7px 12px",
        },
      },
    ],
    styleOverrides: {
      message: {
        padding: "1px",
      },
      icon: {
        padding: "4px",
        marginRight: 0,
        display: "flex",
        alignItems: "center",
      },
      action: {
        display: "flex",
        gap: 1.5,
        padding: "1px",
      },
      root: {
        padding: "8px 12px 8px 12px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        width: "296px",
      },
    },
  }, 
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        ...theme.typography.body2,
        textTransform: "unset",
        lineHeight: "normal",
      }),

      startIcon: {
        marginLeft: 2,
      },
      endIcon: {
        marginRight: 2,
      },
      sizeSmall: {
        height: 26,
        svg: {
          height: 18,
          width: 18,
        },
      },
      sizeMedium: {
        height: 32,
        svg: {
          height: 18,
          width: 18,
        },
      },
      sizeLarge: {
        height: 38,
        svg: {
          height: 20,
          width: 20,
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
        sizeSmall: {
          height: 36,
          width: 36,
          svg: {
            height: 20,
            width: 20,
          },
        },
        sizeMedium: {
          height: 48,
          width: 48,
          svg: {
            height: 22,
            width: 22,
          },
        },
        sizeLarge: {
          height: 56,
          width: 56,
          svg: {
            height: 24,
            width: 24,
          },
        },
      },

      extended: {
        gap: 1,
        boxShadow:
          " 0px 1px 18px 0px rgba(24, 39, 75, 0.12), 0px 6px 10px 0px rgba(24, 39, 75, 0.14), 0px 3px 5px -1px rgba(24, 39, 75, 0.20)",
        sizeSmall: {
          height: 32,
          svg: {
            height: 20,
            width: 20,
            marginRight: 4,
          },
        },
        sizeMedium: {
          height: 38,
          svg: {
            height: 22,
            width: 22,
            marginRight: 4,
          },
        },
        sizeLarge: {
          height: 48,
          svg: {
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
        padding: 8,
      },
      sizeLarge: {
        padding: 12,
      },
    },
  },

  MuiFilledInput: {
    styleOverrides: {
      root: {
        height: 48,
      },
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
        underline: {
          marginTop: 9,
        },

        inputSizeSmall: {
          padding: "0 4px ",
        },
        input: {
          paddingTop: 22,
          paddingBottom: 6,

        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        padding: "6px 14px 6px 10px",
      },
      notchedOutline: {
        borderColor: "rgba(16, 24, 64, 0.23)",
      },
      input: {
        paddingRight: 14,
      },
      inputSizeSmall: {
        paddingBlock: 6.66,
      },
    },
  },

  MuiAutocomplete: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      endAdornment: {
        top: "calc(50% - 12px)",
        transform: "none",
      },
      popupIndicator: {
        padding: 5,
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      asterisk: ({ theme }) => ({
        color: theme.palette.error.main,
      }),

      root: ({ theme }) => ({
        ...theme.typography.body2,
        display: "flex",
        gap: ".2rem",
        flexDirection: "row-reverse",
      }),
      filled: {
        sizeSmall: {
          transform: "translate(12px,9px) scale(1)",
        },
      },
      standard: {
        sizeSmall: {
          transform: "translate(0, 15px) scale(1)",
        },
      },
      outlined: {
        sizeSmall: {
          transform: "translate(14px,7px) scale(1)",
        },
        outlined: {
          transform: "translate(14px, 14px) scale(1)",

          shrink: {
            transform: "translate(14px, -7px) scale(0.75)",
          },
        },
      },
    },
    defaultProps: {
      margin: "dense",
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
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: "8px 16px ",
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: "8px 16px ",
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: "8px 16px ",
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
          svg: {
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
    styleOverrides: {
      sizeSmall: {
        height: 22,
      },
    },
    defaultProps: {
      size: "small",
    },
  },
  MuiTextField: {
    variants: [
      {
        props: { variant: "standard", size: "small" },
        style: {
          input: {
            padding: 1.5,
          },
        },
      },
    ],
    defaultProps: {
      size: "small",
      margin: "none",
    },
  },
  MuiList: {
    defaultProps: {
      dense: false,
    },
    styleOverrides: {
      root: {},
      dense: {},
    },
  },

  MuiListItemText: {
    styleOverrides: {
      multiline: {},
      root: {
        marginBlock: " 4.4px ",
      },
    },
  },

  MuiListItem: {
    styleOverrides: {
      root: {
        padding: "8px 16px 8px 16px",
      },
      dense: {
        padding: "4px 16px 4px 16px",
      },
    },
  },

  MuiListItemButton: {
    styleOverrides: {
      alignItemsFlexStart: {},
      dense: {
        marginBlock: 0,
        padding: 0,
      },

      root: {
        marginBlock: 0,
        padding: 0,
      },
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {
        padding: "7px 16px 7px 16px",
      },
      dense: {
        height: 28,
        minHeight: 28,
      },
    },
  },

  MuiMenuList: {
    styleOverrides: {
      root: {
        icon: {
          minWidth: 32,
        },
        height: 34,
        minHeight: 34,
        lineHeight: "20px",
        letterSpacing: 0.17,
      },
      dense: {
        lineHeight: "14.3px",
        letterSpacing: 0.15,
      },
    },
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 32,
      },
    },
  },

  MuiTableBody: {
    styleOverrides: {
      root: {},
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        padding: "16px ",
      },
      sizeMedium: {
        padding: 13,
      },
    },
  },
  MuiTable: {
    defaultProps: {
      size: "small",
    },
  },
};

// import React from "react";
// import type { } from "@mui/x-data-grid/themeAugmentation";
// import { Components, Theme } from "@mui/material";

// import {
//   InfoRounded,
//   CheckCircleRounded,
//   WarningRounded,
//   ErrorRounded,
// } from "@mui/icons-material";

// export const components: Components<Theme> = {
//   MuiSelect: {
//     styleOverrides: {
//       icon: {
//         width: 16,
//         height: 16,
//         top: "calc(50% - .4em)",
//       },
//       root: {
//         fontSize: 13,
//         fontStyle: "normal",
//         fontWeight: 400,
//         letterSpacing: "0.15px",
//         lineHeight: "19px",
//       },
//     },
//   },
//   MuiSpeedDialIcon: {
//     styleOverrides: {
//       icon: {
//         height: 24,
//         width: 24,
//       },
//     },
//   },
//   MuiSpeedDialAction: {
//     styleOverrides: {
//       fab: {
//         height: 40,
//         width: 40,
//       },
//     },
//   },
//   MuiSpeedDial: {
//     styleOverrides: {
//       fab: {
//         height: 56,
//         width: 56,
//       },
//     },
//   },
//   MuiAccordion: {
//     styleOverrides: {
//       root: {},
//     },
//   },
//   MuiAccordionSummary: {
//     styleOverrides: {
//       root: {
//         minHeight: 44,
//         height: 44,
//       },
//     },
//   },
//   MuiTabs: {
//     styleOverrides: {
//       root: {
//         minHeight: 40
//       },
//     },
//   },
//   MuiTab: {
//     styleOverrides: {
//       labelIcon: {
//         paddingBlock: 10,
//       },
//       root: {
//         minHeight: 40,
//         textTransform: "none"
//       },
//     },
//   },
//   MuiDataGrid: {
//     defaultProps: {
//       columnHeaderHeight: 35,
//       rowHeight: 32,
//       density: "compact",
//     },
//     styleOverrides: {
//       columnHeader: {
//         minHeight: 22,
//         maxHeight: 22,
//         lineHeight: 22,
//       },
//       iconButtonContainer: {
//         fontSize: 16,
//       },

//       columnHeaderTitle: {
//         fontFamily: "Roboto",
//         fontWeight: 500,
//         fontSize: 13,
//         lineHeight: 1.5,
//         letterSpacing: 0.17,
//       },
//       cell: {
//         fontFamily: "Roboto",
//         fontWeight: 300,
//         fontSize: 12,
//         lineHeight: 1.5,
//         letterSpacing: 0.17,
//         // COMPONENTES DENTRO DE CELDAS
//         baseButton: {
//           lineHeight: 0,
//           textTransform: "capitalize",
//         },
//         // CELDA ENFOCADA
//         focused: {
//           outline: "transparent",
//           borderWidth: 0,
//         },
//       },
//       // BOTON MENU EN LAS CABECERA DE CADA COLUMNA
//       menuIconButton: {
//         svg: {
//           fontSize: "16px",
//         },
//       },
//       menu: {
//         svg: {
//           fontSize: "16px !important",
//         },
//         menuItem: {
//           minHeight: "28px",
//           height: "28px",
//         },
//       },
//       pinnedRows: {
//         borderTop: "1px solid rgba(228, 236, 244, 1)",
//       },
//       root: {
//         // FONT-SIZE DE CELDA EN MODO EDICION
//         inputBase: {
//           fontFamily: "Roboto",
//           fontWeight: 300,
//           fontSize: 12,
//           letterSpacing: 0.17,
//           borderRadius: "0px",
//         },
//         // CELDA FOCUS
//         focused: {
//           borderWidth: "0px !important",
//         },
//         // TAMAÑO PEQUEÑO
//         densityCompact: {
//           svgIcon: {
//             fontSize: 16,
//           },
//           cellCheckbox: {
//             buttonBase: {
//               padding: 4,
//             },
//           },
//         },
//       },
//     },
//   },
//   MuiRating: {
//     defaultProps: {
//       size: "small",
//     },
//     styleOverrides: {
//       sizeSmall: {
//         fontSize: 18,
//       },
//       sizeMedium: {
//         fontSize: 24,
//       },
//       sizeLarge: {
//         fontSize: 30,
//       },
//     },
//   },
//   MuiDrawer: {
//     styleOverrides: {
//       root: {
//         boxShadow:
//           "0px 3px 1px -2px rgba(24, 39, 75, 0.20), 0px 2px 2px 0px rgba(24, 39, 75, 0.14), 0px 1px 5px 0px rgba(24, 39, 75, 0.12)",
//       },
//     },
//   },
//   MuiTooltip: {
//     styleOverrides: {
//       tooltip: {
//         backgroundColor: "#424242",
//       },
//     },
//   },
//   MuiDialog: {
//     styleOverrides: {
//       root: {},
//     },
//   },
//   MuiPaper: {
//     styleOverrides: {
//       root: {
//         boxShadow:
//           "0px 1px 5px rgba(24, 39, 75, 0.12), 0px 2px 2px rgba(24, 39, 75, 0.14), 0px 3px 1px -2px rgba(24, 39, 75, 0.2) ",
//       },
//     },
//   },
//   MuiBackdrop: {
//     styleOverrides: {
//       root: {
//         backgroundColor: "#f0f0f099",
//         backdropFilter: "blur(2px) !important",
//       },
//     },
//   },
//   MuiDialogTitle: {
//     styleOverrides: {
//       root: {
//         padding: "8px 16px ",
//       },
//     },
//   },
//   MuiDialogContent: {
//     styleOverrides: {
//       root: {
//         padding: "8px 16px ",
//       },
//     },
//   },
//   MuiDialogActions: {
//     styleOverrides: {
//       root: {
//         padding: "12px 16px ",
//       },
//     },
//   },

//   MuiCheckbox: {
//     variants: [
//       {
//         props: { size: "large" },
//         style: {
//           padding: 9,
//           sv: {
//             height: 24,
//             width: 24,
//             fontSize: 24,
//           },
//         },
//       },

//       {
//         props: { size: "small" },
//         style: {
//           padding: 3,
//         },
//       },
//       {
//         props: { size: "medium" },
//         style: {
//           padding: 4,
//         },
//       },
//     ],
//     defaultProps: {
//       size: "small",
//     },
//   },
//   MuiToggleButton: {
//     styleOverrides: {
//       sizeSmall: {
//         height: 32,
//         width: 32,
//       },
//       sizeMedium: {
//         height: 38,
//         width: 38,
//       },
//       sizeLarge: {
//         height: 48,
//         width: 48,
//       },
//     },
//   },
//   MuiChip: {
//     styleOverrides: {
      
//       colorPrimary: ({ theme }) => ({
//         backgroundColor: theme.palette.chipPrimary.main,
//         ":hover": {
//           backgroundColor: theme.palette.chipPrimary.dark
//         }
//       }),
//       colorSecondary: ({ theme }) => ({
//         backgroundColor: theme.palette.chipSecondary.main,
//         ":hover": {
//           backgroundColor: theme.palette.chipSecondary.dark
//         }
//       }),
//       colorInfo: ({ theme }) => ({
//         backgroundColor: theme.palette.chipInfo.main,
//         ":hover": {
//           backgroundColor: theme.palette.chipInfo.dark
//         }
//       }),
//       colorWarning: ({ theme }) => ({
//         backgroundColor: theme.palette.chipWarning.main,
//         ":hover": {
//           backgroundColor: theme.palette.chipWarning.dark
//         }
//       }),
//       colorSuccess: ({ theme }) => ({
//         backgroundColor: theme.palette.chipSuccess.main,
//         ":hover": {
//           backgroundColor: theme.palette.chipSuccess.dark
//         }
//       }),
//       colorError: ({ theme }) => ({
//         backgroundColor: theme.palette.chipError.main,
//         ":hover": {
//           backgroundColor: theme.palette.chipError.dark
//         }
//       }),
//       filled: ({ theme }) => ({
//         color: theme.palette.chipPrimary.contrastText,
//       }),
//       deleteIcon: {
//         color: "#5A5E73",
//         opacity: "30%"
//       },
//       deleteIconSmall: {
//         height: 16,
//         width: 16,
//       },
//       deleteIconMedium: {
//         height: 20,
//         width: 20,
//       },
//       sizeSmall: {
//         height: 16,
//       },
//       sizeMedium: {
//         height: 20,
//       },
//       label: ({ theme }) => ({
//         ...theme.typography.caption,
//       }),
//       root: {
//         height: "inherit",
//         borderRadius: 4,
//       },
//     },
//   },
//   MuiAlert: {
//     defaultProps: {
//       iconMapping: {
//         success: React.createElement(CheckCircleRounded),
//         error: React.createElement(ErrorRounded),
//         warning: React.createElement(WarningRounded),
//         info: React.createElement(InfoRounded),
//       },
//     },
//     styleOverrides: {
//       filled: {
//         color: "#fff",
//       },
//       message: {
//         padding: "4px 0",
//       },
//       root: {
//         padding: "6px 16px",
//       },
//     },
//   },
//   MuiButton: {
//     styleOverrides: {
//       text: ({ theme }) => ({
//         ...theme.typography.body2
//       }),
//       startIcon: {
//         marginLeft: 2,
//       },
//       endIcon: {
//         marginRight: 2,
//       },
//       sizeSmall: {
//         height: 26,
//       },
//       sizeMedium: {
//         height: 32,
//       },
//       sizeLarge: {
//         height: 38,
//       },
//       iconSizeSmall: {
//         height: 16,
//         width: 16,
//       },
//       iconSizeMedium: {
//         height: 18,
//         width: 18,
//       },
//       iconSizeLarge: {
//         height: 20,
//         width: 20,
//       },
//     },
//   },
//   MuiButtonGroup: {
//     defaultProps: {
//       size: "small",
//     },
//   },
//   MuiFab: {
//     defaultProps: {
//       size: "small",
//     },
//     styleOverrides: {
//       circular: {
//         boxShadow:
//           "0px 1px 18px 0px rgba(24, 39, 75, 0.12), 0px 6px 10px 0px rgba(24, 39, 75, 0.14), 0px 3px 5px -1px rgba(24, 39, 75, 0.20)",
//         sizeSmall: {
//           height: 36,
//           width: 36,
//           svg: {
//             height: 20,
//             width: 20,
//           },
//         },
//         sizeMedium: {
//           height: 48,
//           width: 48,
//           svg: {
//             height: 22,
//             width: 22,
//           },
//         },
//         sizeLarge: {
//           height: 56,
//           width: 56,
//           svg: {
//             height: 24,
//             width: 24,
//           },
//         },
//       },

//       extended: {
//         gap: 1,
//         boxShadow:
//           " 0px 1px 18px 0px rgba(24, 39, 75, 0.12), 0px 6px 10px 0px rgba(24, 39, 75, 0.14), 0px 3px 5px -1px rgba(24, 39, 75, 0.20)",
//         sizeSmall: {
//           height: 32,
//           svg: {
//             height: 20,
//             width: 20,
//             marginRight: 4,
//           },
//         },
//         sizeMedium: {
//           height: 38,
//           svg: {
//             height: 22,
//             width: 22,
//             marginRight: 4,
//           },
//         },
//         sizeLarge: {
//           height: 48,
//           svg: {
//             height: 24,
//             width: 24,
//             marginRight: 4,
//           },
//         },
//       },
//     },
//   },
//   MuiFormControl: {
//     defaultProps: {
//       size: "small",
//       margin: "none",
//     },
//   },
//   MuiFormHelperText: {
//     defaultProps: {
//       margin: "dense",
//     },
//   },
//   MuiSvgIcon: {
//     styleOverrides: {
//       fontSizeLarge: {
//         width: 35,
//         height: 35,
//         fontSize: 35,
//       },
//       fontSizeMedium: {
//         width: 20,
//         height: 20,
//         fontSize: 20,
//       },
//       fontSizeSmall: {
//         width: 16,
//         height: 16,
//         fontSize: 16,
//       },
//     },
//   },
//   MuiIconButton: {
//     styleOverrides: {
//       sizeSmall: {
//         padding: 3,
//       },
//       sizeMedium: {
//         padding: 8,
//       },
//       sizeLarge: {
//         padding: 12,
//       },
//     },
//   },

//   MuiFilledInput: {
//     styleOverrides: {
//       root: {
//         height: 48,
//       },
//       sizeSmall: {
//         height: 38,
//       },
//     },
//   },
//   MuiInputBase: {
//     defaultProps: {
//       margin: "none",
//     },
//     styleOverrides: {
//       root: {
//         underline: {
//           marginTop: 9,
//         },

//         inputSizeSmall: {
//           padding: "0 4px ",
//         },
//         input: {
//           paddingTop: 22,
//           paddingBottom: 6,
//         },
//       },
//     },
//   },
//   MuiOutlinedInput: {
//     styleOverrides: {
//       notchedOutline: {
//         borderColor: "rgba(16, 24, 64, 0.23)",
//       },
//       input: {
//         paddingBlock: 14,
//       },
//       inputSizeSmall: {
//         paddingBlock: 6.66,
//       },
//     },
//   },
//   MuiAutocomplete: {
//     defaultProps: {
//       size: "small",
//     },
//     styleOverrides: {
//       root: {
//         "&.MuiAutocomplete-root .MuiOutlinedInput-root": {
//           padding: "6px 14px 6px 10px",
//         },
//         "& .MuiAutocomplete-endAdornment": {
//           top: "calc(50% - 12px)",
//           transform: "none",
//         },
//         "&.MuiAutocomplete-root .MuiOutlinedInput-root.MuiInputBase-sizeSmall":
//         {
//           paddingBlock: 3.5,
//           paddingRight: 14,
//           ".MuiIconButton-sizeSmall .MuiAutocomplete-popupIndicator": {
//             padding: 5,
//           },
//         },
//       },
//     },
//   },
//   MuiInputLabel: {
//     styleOverrides: {
//       asterisk: ({ theme }) => ({
//         color: theme.palette.error.main,
//       }),
//       root: ({ theme }) => ({
//         ...theme.typography.body2,
//         display: "flex",
//         gap: ".2rem",
//         flexDirection: "row-reverse",
//       }),
//       filled: {
//         sizeSmall: {
//           transform: "translate(12px,9px) scale(1)",
//         },
//       },
//       standard: {
//         sizeSmall: {
//           transform: "translate(0, 15px) scale(1)",
//         },
//       },
//       outlined: {
//         sizeSmall: {
//           transform: "translate(14px,7px) scale(1)",
//         },
//         outlined: {
//           transform: "translate(14px, 14px) scale(1)",

//           shrink: {
//             transform: "translate(14px, -7px) scale(0.75)",
//           },
//         },
//       },
//     },
//     defaultProps: {
//       margin: "dense",
//     },
//   },
//   MuiCard: {
//     styleOverrides: {
//       root: {
//         overflow: "initial",
//         boxShadow:
//           "0px 2px 1px -2px rgba(24, 39, 75, 0.20), 0px 1px 1px -1px rgba(24, 39, 75, 0.14), 0px 1px 3px 0px rgba(24, 39, 75, 0.12)",
//       },
//     },
//   },
//   MuiCardHeader: {
//     styleOverrides: {
//       root: {
//         padding: "8px 16px !important",
//       },
//     },
//   },
//   MuiCardContent: {
//     styleOverrides: {
//       root: {
//         padding: "8px 16px !important",
//       },
//     },
//   },
//   MuiCardActions: {
//     styleOverrides: {
//       root: {
//         padding: "8px 16px !important",
//       },
//     },
//   },
//   MuiRadio: {
//     variants: [
//       {
//         props: { size: "small" },
//         style: {
//           padding: 3,
//         },
//       },
//       {
//         props: { size: "medium" },
//         style: {
//           padding: 4,
//         },
//       },
//       {
//         props: { size: "large" },
//         style: {
//           padding: 9,
//           "& .MuiSvgIcon-fontSizeLarge": {
//             width: 24,
//             height: 24,
//             fontSize: 24,
//           },
//         },
//       },
//     ],
//     defaultProps: {
//       size: "small",
//     },
//   },
//   MuiSwitch: {
//     variants: [
//       {
//         props: { size: "small" },
//         style: {
//           height: 22,
//           ".MuiSwitch-switchBase": {
//             padding: 3,
//           },
//         },
//       },
//     ],
//     defaultProps: {
//       size: "small",
//     },
//   },
//   MuiTextField: {
//     variants: [
//       {
//         props: { variant: "standard" },
//         style: {
//           ".MuiInputBase-input.MuiInputBase-inputSizeSmall": {
//             padding: 1.5,
//           },
//         },
//       },
//     ],
//     defaultProps: {
//       size: "small",
//       margin: "none",
//     },
//   },
//   MuiList: {
//     defaultProps: {
//       dense: false,
//     },
//     styleOverrides: {
//       padding: {
//         ".MuiListItem-padding": {
//           paddingBlock: 4.2,
//         },
//       },
//       dense: {
//         ".MuiListItem-dense": {
//           padding: "4px 16px 4px 16px",
//           ".MuiListItemIcon-root": {
//             minWidth: "29px",
//           },
//         },
//       },
//     },
//   },
//   MuiListItemButton: {
//     styleOverrides: {
//       dense: {
//         padding: "4px 16px 4px 16px ",
//       },
//       root: {
//         padding: "8.5px 16px",
//         ".MuiListItemText-multiline": {
//           marginBlock: "4px",
//         },
//       },
//     },
//   },
//   MuiMenuItem: {
//     styleOverrides: {
//       dense: {
//         height: 28,
//         minHeight: 28,
//         ".MuiListItemText-root > .MuiTypography-root": {
//           lineHeight: "14.3px",
//           letterSpacing: 0.15,
//         },
//       },
//       root: {
//         padding: "7px 16px 7px 16px",
//         ".MuiMenuList-root": {
//           height: 34,
//           minHeight: 34,
//         },
//         ".MuiListItemText-root > .MuiTypography-root": {
//           lineHeight: "20px",
//           letterSpacing: 0.17,
//         },
//         ".MuiListItemIcon-root": {
//           minWidth: 32,
//         },
//       },
//     },
//   },
//   MuiTableBody: {
//     styleOverrides: {
//       root: {
//         ".MuiTableCell-body.MuiTableCell-sizeMedium": {
//           padding: "16px !important",
//         },
//       },
//     },
//   },
//   MuiTableCell: {
//     styleOverrides: {
//       sizeMedium: {
//         padding: 13,
//       },
//     },
//   },
//   MuiTable: {
//     defaultProps: {
//       size: "small",
//     },
//   },
// };
