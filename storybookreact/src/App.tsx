// import { ToastNotificationComponent } from "@sinco/react";
import {
  DrawerComponent,
  FooterActionComponent,
  PageHeader,
  PageHeaderComponent,
  ToastNotification,
  ToastNotificationComponent,
} from "@sinco/react";
import React from "react";

import { Chip, Fab, TextField } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

function App() {
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
    </>
  );
}

export default App;
