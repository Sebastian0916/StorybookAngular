import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import React from "react";

interface camposModificadosProps {
  children: React.ReactNode;
  cantidadCamposModifcados: number;
}
export const footerAction = (props: camposModificadosProps) => {
  return (
    <AppBar position="fixed" color="inherit" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar sx={{ px: "16px", py: "12px", gap: 1.5 }}>
        <Box flexGrow={1} />
        <Typography color="text.secondary" variant="body2">
          Cambiaste {props.cantidadCamposModifcados} campos de información
        </Typography>
        {props.children}
      </Toolbar>
    </AppBar>
  );
};
