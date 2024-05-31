import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import react, { useState } from "react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { SincoTheme } from "@sinco/react";
import { Add } from "@mui/icons-material";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryFn<typeof TextField>;

// export const primary: Story = {
//   name: "textField-outlined",
//   render: (args) => (
//     <>
//       <TextField label="Outlined" variant="outlined" />
//       <TextField label="outlined" variant="outlined" size="medium" />
//     </>
//   ),
// };
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
const TextFieldSelect: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <TextField
        label="Outlined"
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Add fontSize="small" />

              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </InputAdornment>
          ),
        }}
      />

      <TextField label="outlined" variant="filled" size="medium" />
    </>
  );
};
export const standard: Story = () => <TextFieldSelect />;

// export const tercero: Story = {
//   name: "textField-standard",
//   render: (args) => (
//     <>
//       <TextField label="Outlined" variant="standard" />
//       <TextField label="outlined" variant="standard" size="medium" />
//     </>
//   ),
// };
