import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import React from "react";

interface CamposModificadosProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  cantidadCamposModifcados: number;
}

export const footerAction = (props: CamposModificadosProps) => {
  return (
    <AppBar position="fixed" color="inherit" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar sx={{ gap: 1.5 }}>
      {props.leftContent}
        <Box flexGrow={1} />
        <Typography color="text.secondary" variant="body2" display="flex">
          Cambiaste
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ fontWeight: "bold", px: "2px" }}
          >
            {props.cantidadCamposModifcados}
          </Typography>
          campos de información
        </Typography>
        {props.rightContent}
      </Toolbar>
    </AppBar>
  );
};
