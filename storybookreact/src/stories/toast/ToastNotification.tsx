import React from "react";
import { ToastBaseProperties, ToastNotification } from "./ToastBase";
import { Stack } from "@mui/material";

interface ToastNotificationProperties {
  toast: ToastBaseProperties | ToastBaseProperties[];
}

export const ToastNotificationComponent = ({
  toast,
}: ToastNotificationProperties) => {
  return (
    <Stack position={"fixed"} zIndex={1400} right={16} top={16} gap={1}>
      {Array.isArray(toast) ? (
        toast.map((toastProps, i) => (
          <ToastNotification key={i} {...toastProps} />
        ))
      ) : (
        <ToastNotification {...toast} />
      )}
    </Stack>
  );
};
