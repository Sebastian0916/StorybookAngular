// import { ToastNotificationComponent } from "@sinco/react";
import {
  DrawerComponent,
  EmptyState,
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
import { Chip } from "@mui/material";

function App() {
  return (
    <>
     <ToastNotification title="Hola" type="success" seeMore={true} />
    {/* <ToastNotification title="Hola" type="success" seeMore={true} />
      <PageHeaderComponent title="Title" subtitle="Subtitle" />
      <Chip label="Hola" color="primary" />
      <DrawerComponent
        title="Nukll"
        open={false}
        children={null}
        actions={null}
        onClose={() => {}}
        width="600px"
      ></DrawerComponent> */}
      {/* <EmptyState title="title" /> */}
      {/* <FooterActionComponent labelChangeCounter="Label" /> */}
    </>
  );
}

export default App;
