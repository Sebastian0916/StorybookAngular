import type { Meta } from "@storybook/react";
import { Button, ThemeProvider, Typography } from "@mui/material";
import { SincoTheme } from "@sinco/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";
import { FooterActionComponent } from "./footerAction";


const meta: Meta<typeof FooterActionComponent> = {
  title: "Components/footerActionComponent",
  component: FooterActionComponent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default meta;
export const FooterAction = {
  name: "FooterAction..",
  args: {
    labelChangeCounter: (
      <>
        <Typography color="text.secondary" variant="body2" display="flex">
          Cambiaste
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ fontWeight: "bold", px: "2px" }}
          >
            X
          </Typography>
          Campos de información
        </Typography>
      </>
    ),
    renderLeftContent: <Button size="small">Action</Button>,
    renderRightContent: (
      <>
        <Button variant="text" size="small">
          Action
        </Button>
        <Button
          variant="contained"
          size="small"
          endIcon={<ArrowForwardIcon fontSize="small" />}
        >
          Action
        </Button>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: ` <FooterActionComponent
       labelChangeCounter={
         <Typography color="text.secondary" variant="body2" display="flex">
           Cambiaste
           <Typography
             color="text.secondary"
             variant="body2"
             sx={{ fontWeight: "bold", px: "2px" }}
           >
             X
           </Typography>
           Campos de información
         </Typography>
       }
       renderLeftContent={
         <>
           <Button size="small">Open drawer</Button>
         </>
       }
       renderRightContent={
         <>
           <Button size="small">Open drawer</Button>
           <Button size="small">Open drawer</Button>
         </>
       }
     ></FooterActionComponent>`,
      },
    },
  },
};
