// import { ToastNotificationComponent } from "@sinco/react";
import {
  DrawerComponent,
  FooterAction,
  PageHeader,
  ToastNotification,
} from "@sinco/react";
import React from "react";

import {
  Chip,
  Fab,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  Add,
  Delete,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
} from "@mui/icons-material";

function App() {
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left">
      <FormatAlignLeft />
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <FormatAlignCenter />
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <FormatAlignRight />
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      <FormatAlignJustify />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };
  return (
    <>
      <ToastNotification title="Hola" type="success" seeMore={true} />
      {/* <PageHeader title="Titley" fixed={true}/> */}
      <Fab size="small" color="secondary" aria-label="add">
        <Add />
      </Fab>
      <Fab size="medium" color="secondary" aria-label="add">
        <Add />
      </Fab>
      <Fab size="large" color="secondary" aria-label="add">
        <Add />
      </Fab>
      <TextField variant="outlined" size="medium" label="Outlined" />
      <TextField variant="outlined" label="Outlined" />
      <Chip
        icon={<Delete />}
        label="With Icon"
        variant="filled"
        // color="primary"
      />
      <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control} aria-label="Medium sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
        {children}
      </ToggleButtonGroup>
    </>
  );
}

export default App;
