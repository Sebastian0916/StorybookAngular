import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import { ReactNode } from 'react';

const stylesDrawerContainer = {
  display: "flex",
  flexDirection: "column",
  alignContent: "flex-start",
  justifyContent: "space-between",
  width: "530px",
  height: "100%",
  overflow: "hidden",
};

const stylesEncabezado = {
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
  backgroundColor: "secondary.main",
  py: "12px",
  px: "8px",
};

const stylesContenido = {
  display: "flex",
  overflow: "auto",
  alignItems: "flex-start",
  flexDirection: "column",
  height: "-webkit-fill-available",
  backgroundColor: "background.default",
  py: "12px",
  px: "8px",
};
const stylesAcciones = {
  display: "flex",
  alignContent: "center",
  justifyContent: "flex-end",
  borderTop: "1px solid rgba(16, 24, 64, 0.23)",
  backgroundColor: "#F1F0EE",
  gap: "8px",
  py: "12px",
  px: "8px",
};

 type Anchor = "left" | "right";

 interface DrawerComponentProps {
  open: boolean;
  onClose: () => void;
  titulo: string;
  children: ReactNode;
  acciones: ReactNode;
  anchor?: Anchor;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  open,
  onClose,
  titulo,
  children,
  acciones,
  anchor,
}) => {
  const [showActions, setShowActions] = useState(false);
  const mostrarAcciones = () => {
    setShowActions(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [drawerAbierto, setDrawerAbierto] = useState(false);
  const abrirDrawer = () => {
    setDrawerAbierto(true);
    onClose()
  };
  const cerrarDrawer = () => {
    setDrawerAbierto(false);
    onClose()
  };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          borderRadius: "8px 0px 0px 0px",
        },
      }}
    >
      <Box sx={stylesDrawerContainer}>
        <Box sx={stylesEncabezado}>
          <Typography variant="h6">{titulo}</Typography>
          <Box>
            <IconButton onClick={onClose} size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Box onClick={mostrarAcciones} sx={stylesContenido}>
          {children}
        </Box>
        {showActions && <Box sx={stylesAcciones}>{acciones}</Box>}
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
