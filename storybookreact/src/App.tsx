import { ArrowBack } from "@mui/icons-material";
import { Button, Checkbox, IconButton, Radio } from "@mui/material";
import { PageHeaderComponent } from "./stories/pageHeader/PageHeader";
// import { ToastNotificationComponent } from "@sinco/react";
import { ToastNotificationComponent } from "./stories/toast/ToastNotification";
import React from "react";

function App() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <>
      {/* <PageHeaderComponent
        fixed={true}
        title="Title"
        subtitle="Hola mundo"
        buttonBack={
          <IconButton color="primary" size="small">
            <ArrowBack fontSize="small" />
          </IconButton>
        }
        actions={<Button size="small">Button</Button>}
      /> */}
      {/* <Button size="large" variant="contained" color="primary">
        Button
      </Button>
      <Button size="medium" variant="contained" color="primary">
        Button
      </Button>
      <Button size="small" variant="contained" color="primary">
        Button
      </Button>
      <ToastNotificationComponent title="Hola" time={12} /> */}
      <IconButton color="primary" size="small">
        <ArrowBack fontSize="small" />
      </IconButton>
      <IconButton size="small" color="primary">
        <ArrowBack fontSize="medium" />
      </IconButton>
      <IconButton size="medium" color="error">
        <ArrowBack fontSize="small" />
      </IconButton>
      <IconButton size="medium" color="error">
        <ArrowBack fontSize="medium" />
      </IconButton>
      <IconButton size="small" color="error">
        <ArrowBack fontSize="large" />
      </IconButton>
      <IconButton size="medium" color="error">
        <ArrowBack fontSize="large" />
      </IconButton>
    </>
  );
}

export default App;
