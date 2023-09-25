import React from "react";
import { AppBar, Toolbar, Box, TextField } from "@mui/material";

interface FooterActionsProperties {
  labelChangeCounter: React.ReactNode;
  renderLeftContent?: React.ReactNode;
  renderRightContent?: React.ReactNode;
}

export const FooterActionComponent = ({
  renderLeftContent,
  renderRightContent,
  labelChangeCounter,
}: FooterActionsProperties) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        textAlign="center"
        gap={1}
        pb={2}
      >
        <TextField label="Nombre" variant="outlined" size="small" />
        <TextField label="Apellido" variant="outlined" size="small" />
        <TextField label="Edad" variant="outlined" size="small" type="number" />
        <TextField label="Cargo" variant="outlined" size="small" />

        <AppBar
          position="fixed"
          color="inherit"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar sx={{ gap: 1.5 }}>
            {renderLeftContent}
            <Box flexGrow={1} />
            <Box>{labelChangeCounter}</Box>
            {renderRightContent}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
