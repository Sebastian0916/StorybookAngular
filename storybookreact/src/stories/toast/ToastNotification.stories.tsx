import type { Meta } from "@storybook/react";
import ToastNotification from "./ToastNofitication";
import { Button } from "@mui/material";
const meta: Meta<typeof ToastNotification> = {
  title: "Components/ToastNotification",
  component: ToastNotification,
  tags: ["autodocs"],
};
export default meta;
export const Primary = {
  name: "ToastNotification",
  args: {
    type: "error",
    time: 100000,
    title: "Title",
    seeMore: true,
    dataOpt: [{ Error: "El resgistro a fallado" }],
    subtitle: "Description",
    actions: (
      <Button color="error" size="small">
        Actions
      </Button>
    ),
  },
};
