import React, { ReactNode, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

interface DrawerComponentProps {
  titulo: string;
  children: ReactNode;
  acciones: ReactNode;
  open: boolean;
  onClose: () => void;
}

const stylesDrawerContainer = {
  display: "flex",
  flexDirection: "column",
  alignContent: "flex-start",
  justifyContent: "space-between",
  width: "530px",
  height: "100%",
  overflow: "hidden",
  borderRadius: "8px 0px 0px 0px",
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
  marginBottom: "4xp",
  py: "12px",
  px: "8px",
};
const stylesAcciones = {
  display: "flex",
  alignContent: "center",
  justifyContent: "flex-start",
  borderTop: "1px solid rgba(16, 24, 64, 0.23)",
  backgroundColor: "#F1F0EE",
  gap: "8px",
  py: "12px",
  px: "8px",
};

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  open,
  onClose,
  titulo,
  children,
  acciones,
}) => {
  const [showActions, setShowActions] = useState(false);

  const mostrarAcciones = () => {
    setShowActions(true);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          borderRadius: "8px 0px 0px 0px"
        }
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
