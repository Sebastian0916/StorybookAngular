import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Stack,
  LinearProgress,
  Divider,
  Box,
  Typography,
  IconButton,
  Button,
  styled,
} from "@mui/material";
import {
  Close,
  InfoRounded,
  CheckCircleRounded,
  WarningRounded,
  ErrorRounded,
  ArrowDownward,
  ArrowUpward,
} from "@mui/icons-material";
import { IconMap, Toast, ColorMap } from "./interfaces";
import { SincoTheme } from "@sinco/react";

const ToastContent = styled(Stack)(() => ({
  position: "fixed",
  zIndex: 1400,
  boxShadow:
    "0px 5px 5px -3px rgba(24, 39, 75, 0.2), 0px 8px 10px 1px rgba(24, 39, 75, 0.14), 0px 3px 14px 2px rgba(24, 39, 75, 0.12)",
  right: 16,
}));
const ContentBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  gap: theme.spacing(1.5),
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
}));
const RippleIcon = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1),
  gap: theme.spacing(1),
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
}));
const ContentIcon = styled(Stack)(({ theme }) => ({
  "&.icon-color.color-info": {
    color: theme.palette.info.main,
  },
  "&.icon-color.color-error": {
    color: theme.palette.error.main,
  },
  "&.icon-color.color-warning": {
    color: theme.palette.warning.main,
  },
  "&.icon-color.color-success": {
    color: theme.palette.success.main,
  },
}));

const ToastNotification = (toast: Toast) => {
  const [openToast, setOpenToast] = useState(true);
  const [showOptions, setShowOptions] = useState(true);
  const [progress, setProgress] = useState(100);
  const timeProgress = toast.time || 8000;

  const IconMap: IconMap = {
    success: <CheckCircleRounded />,
    error: <ErrorRounded />,
    warning: <WarningRounded />,
    info: <InfoRounded />,
  };

  const ToastIcon = IconMap[toast.type || "info"];

  const colorMap: ColorMap = {
    success: "success",
    error: "error",
    warning: "warning",
    info: "info",
  };

  const colors = colorMap[toast.type || "info"];

  const close = () => {
    setOpenToast(false);
  };

  const toggleOptions = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };
  const seeOptions = toast.seeMore;

  useEffect(() => {
    let seconds = 0;
    const interval = setInterval(() => {
      seconds += 100;
      const progress = 100 - (seconds / timeProgress) * 100;
      setProgress(progress <= 0 ? 0 : progress);
    }, 100);

    const closeTimeout = setTimeout(() => {
      clearInterval(interval);
      setOpenToast(false);
    }, timeProgress);

    return () => {
      clearInterval(interval);
      clearTimeout(closeTimeout);
    };
  }, [timeProgress]);
  return (
    <>
      {openToast && (
        <ThemeProvider theme={SincoTheme}>
          <Stack
            height={105}
            top={16}
            right={16}
            position="absolute"
            zIndex={1400}
          >
            <ToastContent position={"fixed"}>
              <ContentBox className={`color-${toast.type || "info"}`}>
                {toast && (
                  <RippleIcon className={`ripple-${toast.type || "info"}`}>
                    <ContentIcon
                      className={`icon-color color-${toast.type || "info"}`}
                    >
                      {ToastIcon}
                    </ContentIcon>
                  </RippleIcon>
                )}
                <Divider orientation="vertical" flexItem />
                <Stack gap={0.5} width={285}>
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
                      onClick={close}
                    >
                      <Close />
                    </IconButton>
                  </Stack>
                  <Stack gap="4px">
                    <Typography color="text.primary" variant="body2">
                      {toast.subtitle}
                    </Typography>
                    {!showOptions &&
                      toast.dataOpt &&
                      toast.dataOpt.length > 0 && (
                        <ul
                          style={{
                            paddingLeft: 15,
                            marginBlock: 0,
                            fontSize: 11,
                            color: "#101840de",
                          }}
                        >
                          {toast.dataOpt.map((element: any, i: number) => {
                            const keyElement = Object.keys(element);
                            let options = "";
                            for (let i = 0; i < keyElement.length; i++) {
                              options += element[keyElement[i]];
                            }
                            return (
                              <li style={{ width: "fit-content" }} key={i}>
                                <Typography variant="caption">
                                  {options}
                                </Typography>
                              </li>
                            );
                          })}
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
                    {seeOptions && (
                      <Button
                        onClick={toggleOptions}
                        size="small"
                        variant="text"
                        color={colors}
                        endIcon={
                          showOptions ? (
                            <ArrowDownward fontSize="small" />
                          ) : (
                            <ArrowUpward fontSize="small" />
                          )
                        }
                      >
                        {showOptions ? "Ver más" : "Ver menos"}
                      </Button>
                    )}
                  </Stack>
                </Stack>
              </ContentBox>
              <LinearProgress
                color={colors}
                variant="determinate"
                value={progress}
              />
            </ToastContent>
          </Stack>
        </ThemeProvider>
      )}
    </>
  );
};

export default ToastNotification;
