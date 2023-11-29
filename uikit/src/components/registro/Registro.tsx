import React from "react";
import { PageHeader, ToastNotification } from "@sinco/react";
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { Add } from "@mui/icons-material";
import Fondo from "../../assets/Fondo.svg";
import Ilustracion from "../../assets/Ilustracion.svg";
import RegistroTerceros from "./RegistroTerceros";
const Registro = () => {
  return (
    <>
    <ToastNotification  title="Title" time={100000} subtitle="Subtitle" />
      <PageHeader
        title="Administración de terceros"
        subtitle={
          <Stack flexDirection="row" gap={2}>
            <Typography variant="caption" color="text.secondary">
              Constructora de Oriente S.A - NIT 10.022003049
            </Typography>
            <Divider flexItem orientation="vertical" />
            <Typography variant="caption" color="text.secondary">
              Fecha: {new Date().toLocaleString()}
            </Typography>
          </Stack>
        }
        actions={
          <Button
            size="small"
            variant="contained"
            startIcon={<Add fontSize="small" />}
          >
            Crear Tercero
          </Button>
        }
      />
      <Stack direction="column">
        <Stack
          direction="row"
          position="absolute"
          width="100%"
          style={{ backgroundColor: "primary" }}
        >
          <img src={Fondo} style={{ width: "100%" }} />
        </Stack>
        <Stack
          paddingTop={7}
          gap={1.5}
          zIndex={2}
          width="100%"
          direction="row"
          justifyContent="center"
        >
          <Card style={{ width: "48%", backgroundColor: "#FFFFFF" }}>
            <CardContent>
              <Stack gap={3} direction="column" padding={2}>
                <Stack direction="column" alignItems={"center"}>
                  <Typography
                    textAlign={"center"}
                    variant="h6"
                    color="text.primary"
                  >
                    Selecciona el tercero que deseas consultar
                  </Typography>
                  <Autocomplete
                    fullWidth
                    disablePortal
                    id="combo-box-demo"
                    options={dataAutocomplete}
                    renderInput={(params) => (
                      <TextField {...params} label="Movie" />
                    )}
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack
          mt={7}
          gap={1.5}
          direction={"column"}
          display="flex"
          alignItems={"center"}
        >
          <img src={Ilustracion} width="13%" alt="Nuevo Tercero" />
            <Button size="small" variant="contained">
              Crear tercero
            </Button>
        </Stack>
      </Stack>
    </>
  );
};
const dataAutocomplete = [
  { label: "empresa", year: 2001 },
  { label: "empresa", year: 2001 },
  { label: "empresa", year: 2001 },
  { label: "empresa", year: 2001 },
  { label: "empresa", year: 2001 },
];
export default Registro;
