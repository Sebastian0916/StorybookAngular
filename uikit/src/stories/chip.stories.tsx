import type { Meta, StoryObj } from "@storybook/react";
import { Chip, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CancelOutlined } from "@mui/icons-material";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
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

const handleClick = () => {
  console.info('You clicked the Chip.');
};
const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const button: Story = {

  name: "chip",
  render: (args) => (
    <Stack gap={1}>
      <Chip color="primary" icon={<CancelOutlined />} label="Chip example" variant="filled" onClick={handleClick} onDelete={handleDelete} />
      <Chip color="secondary" label="Chip example" variant="filled" onClick={handleClick} onDelete={handleDelete} />
      <Chip color="info" label="Chip example" variant="filled" onClick={handleClick} onDelete={handleDelete} />
      <Chip color="warning" label="Chip example" variant="filled" onClick={handleClick} onDelete={handleDelete} />
      <Chip color="success" label="Chip example" variant="filled" onClick={handleClick} onDelete={handleDelete} />
    </Stack>
  ),
};

{/* <Chip color="primary" variant="outlined" label="contained" /> */ }
{/* <Chip color="secondary" variant="outlined" icon={<CancelOutlined />} label="With Icon" /> */ }
{/* <Chip label="Deletable" color="info" variant="filled" onDelete={handleDelete} /> */ }
{/* <Chip color="warning" variant="outlined" label="Clickable" onClick={handleClick} /> */ }