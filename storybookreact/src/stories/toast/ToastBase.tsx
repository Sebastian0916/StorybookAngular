import { ReactElement, useEffect, useState } from "react";
import {
  Stack,
  LinearProgress,
  Divider,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import {
  Close,
  InfoRounded,
  CheckCircleRounded,
  WarningRounded,
  ErrorRounded,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { useProgress } from "./useProgress";
import { SincoTheme } from "@sinco/react";
import React from "react";

export interface ToastBaseProperties {
  type?: string;
  subtitle?: string;
  time?: number | any;
  title: string;
  dataOpt?: string[];
  actions?: React.ReactNode;
  seeMore?: boolean;
}

interface handleToastColor {
  [key: string]: "success" | "error" | "warning" | "info";
}
interface handleChangeToastIcon {
  [key: string]: ReactElement;
}

export const ToastNotification = (toast: ToastBaseProperties) => {
  const [stateOptions, setStateOptions] = useState(true);
  const [stateToast, setStateToast] = useState(true);
  const timeProgress = toast.time || 8000;
  const { progressToast } = useProgress(timeProgress);

  const toastColorOption: handleToastColor = {
    success: "success",
    error: "error",
    warning: "warning",
    info: "info",
  };

  const toastColorConfig = toastColorOption[toast.type || "info"];

  const toastIconOption: handleChangeToastIcon = {
    success: <CheckCircleRounded />,
    error: <ErrorRounded />,
    warning: <WarningRounded />,
    info: <InfoRounded />,
  };

  const ToastIconConfig = toastIconOption[toast.type || "info"];

  const closeToast = () => {
    setStateToast(false);
  };

  const toggleToastOptions = () => {
    setStateOptions((prevShowOptions) => !prevShowOptions);
  };

  useEffect(() => {
    progressToast <= 0 && setStateToast(false);
  }, [progressToast]);
  return (
    <>
      {stateToast && (
        <Stack
          width={370}
          sx={{
            boxShadow:
              "0px 5px 5px -3px rgba(24, 39, 75, 0.2), 0px 8px 10px 1px rgba(24, 39, 75, 0.14), 0px 3px 14px 2px rgba(24, 39, 75, 0.12)",
          }}
        >
          <Box
            sx={{
              padding: SincoTheme.spacing(1.5),
              gap: SincoTheme.spacing(1.5),
              display: "flex",
              alignItems: "center",
              "&.color-error": {
                backgroundColor: "#FEEBEE",
              },
              "&.color-info": {
                backgroundColor: "#E1F5FE",
              },
              "&.color-warning": {
                backgroundColor: "#FFF3E0",
              },
              "&.color-success": {
                backgroundColor: "#E8F5E9",
              },
            }}
            className={`color-${toastColorConfig}`}
          >
            {toast && (
              <Stack
                sx={{
                  padding: SincoTheme.spacing(1),
                  gap: SincoTheme.spacing(1),
                  height: 20,
                  borderRadius: 50,
                  "&.ripple-error": {
                    backgroundColor: "#D143431F",
                  },
                  "&.ripple-info": {
                    backgroundColor: "#2D9FC51F",
                  },
                  "&.ripple-warning": {
                    backgroundColor: "#FB85001F",
                  },
                  "&.ripple-success": {
                    backgroundColor: "#8FC93A1F",
                  },
                }}
                className={`ripple-${toast.type || "info"}`}
              >
                <Stack
                  sx={{
                    "&.icon-color.color-info": {
                      color: SincoTheme.palette.info.main,
                    },
                    "&.icon-color.color-error": {
                      color: SincoTheme.palette.error.main,
                    },
                    "&.icon-color.color-warning": {
                      color: SincoTheme.palette.warning.main,
                    },
                    "&.icon-color.color-success": {
                      color: SincoTheme.palette.success.main,
                    },
                  }}
                  className={`icon-color color-${toast.type || "info"}`}
                >
                  {ToastIconConfig}
                </Stack>
              </Stack>
            )}
            <Divider orientation="vertical" flexItem />
            <Stack width={285}>
              <Stack
                justifyContent="space-between"
                flexDirection="row"
                alignItems="center"
              >
                <Typography variant="subtitle2" color="text.primary">
                  {toast.title}
                </Typography>
                <IconButton
                  size="small"
                  aria-label="delete"
                  onClick={closeToast}
                >
                  <Close fontSize="small" />
                </IconButton>
              </Stack>
              <Stack gap="4px">
                <Typography
                  color="text.primary"
                  variant="body2"
                  sx={{
                    display:
                      toast.subtitle && toast.subtitle.length > 1
                        ? "block"
                        : "none",
                  }}
                >
                  {toast.subtitle}
                </Typography>

                {!stateOptions && toast.dataOpt && toast.dataOpt.length > 0 && (
                  <ul
                    style={{
                      paddingLeft: 15,
                      marginBlock: 0,
                      fontSize: 11,
                      color: "#101840de",
                    }}
                  >
                    {toast.dataOpt.map((element, i) => (
                      <li style={{ width: "fit-content" }} key={i}>
                        <Typography variant="caption">{element}</Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </Stack>
              <Stack
                justifyContent="flex-end"
                flexDirection="row"
                alignItems="flex-end"
              >
                {toast.actions && (
                  <Stack flexDirection="row" gap={1}>
                    {toast.actions}
                  </Stack>
                )}
                {toast.seeMore && (
                  <Button
                    onClick={toggleToastOptions}
                    size="small"
                    variant="text"
                    color={toastColorConfig}
                    endIcon={
                      stateOptions ? <KeyboardArrowDown /> : <KeyboardArrowUp />
                    }
                  >
                    {stateOptions ? "Ver más" : "Ver menos"}
                  </Button>
                )}
              </Stack>
            </Stack>
          </Box>
          <LinearProgress
            color={toastColorConfig}
            variant="determinate"
            value={progressToast}
          />
        </Stack>
      )}
    </>
  );
};
