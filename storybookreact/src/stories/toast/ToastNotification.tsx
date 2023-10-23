import React, { ReactElement, useEffect, useState } from "react";
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

export type toastType = "success" | "error" | "warning" | "info";
export interface ToastBaseProperties {
  type?: toastType;
  subtitle?: string;
  title: string;
  time?: number | any;
  dataOpt?: string[];
  actions?: React.ReactNode;
  seeMore?: boolean;
}

export const ToastNotificationComponent = (toast: ToastBaseProperties) => {
  const [stateOptions, setStateOptions] = useState(true);
  const [stateToast, setStateToast] = useState(true);
  const timeProgress = toast.time || 10;
  const { progressToast } = useProgress(timeProgress);

  const toastColorConfig: toastType = toast.type || "info";

  const toastIconOption: Record<toastType, ReactElement> = {
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
          position={"fixed"}
          zIndex={1400}
          right={16}
          top={16}
          width={370}
          sx={{
            boxShadow: (theme) => theme.shadows[8],
          }}
        >
          <Box
            padding={1.5}
            gap={1.5}
            display="flex"
            alignItems="center"
            sx={{
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
            <Stack
              p={1}
              gap={1}
              height={20}
              borderRadius={50}
              sx={{
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
                    color: (theme) => theme.palette.info.main,
                  },
                  "&.icon-color.color-error": {
                    color: (theme) => theme.palette.error.main,
                  },
                  "&.icon-color.color-warning": {
                    color: (theme) => theme.palette.warning.main,
                  },
                  "&.icon-color.color-success": {
                    color: (theme) => theme.palette.success.main,
                  },
                }}
                className={`icon-color color-${toast.type || "info"}`}
              >
                {ToastIconConfig}
              </Stack>
            </Stack>
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
                <IconButton size="small" onClick={closeToast}>
                  <Close fontSize="small" />
                </IconButton>
              </Stack>
              <Stack gap={0.5}>
                <Typography color="text.primary" variant="body2">
                  {toast.subtitle}
                </Typography>
                {!stateOptions && toast.dataOpt && toast.dataOpt.length > 0 && (
                  <Stack>
                    {toast.dataOpt.map((element, i) => (
                      <Typography variant="caption" key={i}>
                        • {element}
                      </Typography>
                    ))}
                  </Stack>
                )}
              </Stack>
              <Stack justifyContent="flex-end" flexDirection="row">
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
                  >
                    {stateOptions ? "Ver más" : "Ver menos"}
                    {stateOptions ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                  </Button>
                )}
              </Stack>
            </Stack>
          </Box>
          <LinearProgress
            sx={{
              ".MuiLinearProgress-bar": {
                transition: "0.1s linear !important",
              },
            }}
            color={toastColorConfig}
            variant="determinate"
            value={progressToast}
          />
        </Stack>
      )}
    </>
  );
};
