import { ArrowBack } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import { ToastNotification } from "@sinco/react";

// import ToastNotification from "./stories/toast/ToastNofitication";
import PageHeader from "./stories/pageHeader/PageHeader";
// import EmptyState from "./stories/emptyState/EmptyState";
// import Logo from "../src/assets/create.svg";
// import { ToastNotification, PageHeader } from "@sinco/react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
declare module "@mui/material/Chip" {
  interface ChipPropsSizeOverrides {
    xsmall: true;
  }
}
declare module "@mui/material/Checkbox" {
  interface CheckboxPropsSizeOverrides {
    xsmall: true;
  }
}
function App() {
  return (
    <>
      <Checkbox size="xsmall" {...label} defaultChecked />

      <ToastNotification
        type="info"
        dataOpt={[{ error: "Hola" }]}
        time={100000}
        seeMore={false}
        title="Hola"
        subtitle="Daño"
        actions={
          <Button color="error" size="small">
            Hola
          </Button>
        }
      />
      <Typography variant="h6">Holaaa</Typography>
      {/* <EmptyState
        actions={
          <>
            <Button size="small" variant="text">
              Crear
            </Button>
            <Button size="small" variant="outlined">
              Crear
            </Button>
          </>
        }
        content="Contenido del empty state"
        state="noresult"
        title="Titulo del empty state"
      /> */}
      {/* <ToastNotification
        type="error"
        dataOpt={[{ erro: "Hola" }]}
        time={100000}
        seeMore={true}
        title="Hola"
        subtitle="Holaajahsjklajsaljskla ksdjalsj"
        actions={
          <Button color="error" size="small">
            Hola
          </Button>
        }
        // position="center"
      />
      <ToastNotification
        type="error"
        dataOpt={[{ erro: "Hola" }]}
        time={100000}
        seeMore={true}
        title="Hola"
        subtitle="Holaajahsjklajsaljskla ksdjalsj"
        actions={
          <Button color="error" size="small">
            Hola
          </Button>
        }
        // position="center"
      /> */}
    </>
  );
}

export default App;
