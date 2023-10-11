import { ArrowBack, Delete, Done, More } from "@mui/icons-material";
import { Button, Chip, IconButton, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import { SincoTheme } from "@sinco/react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function App() {
  console.log(SincoTheme.components?.MuiInputLabel?.styleOverrides?.outlined);
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <>
      <Chip label="Mui Chip" color="primary" />
      <Chip
        label="Deletable"
        // variant="outlined"
        onDelete={handleDelete}
        color="primary"
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Delete />}
        color="primary"
      />
      <Chip
        color="primary"
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Delete />}
        variant="outlined"
      />
    </>
  );
}

export default App;
