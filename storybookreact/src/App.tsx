// import { ToastNotificationComponent } from "@sinco/react";
import {
  DrawerComponent,
  FooterActionComponent,
  // PageHeaderComponent,
  // ToastNotificationComponent,
} from "@sinco/react";
import React from "react";
import { PageHeaderComponent } from "./stories/pageHeader/PageHeader";
import {
  ToastNotification,
  ToastNotificationComponent,
} from "./stories/toast/ToastNotification";
import { Chip, Fab, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

function App() {
  return (
    <>
      <ToastNotification title="Hola" type="success" seeMore={true} />
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
    </>
  );
}

export default App;
