import React from "react";
import { PageHeader } from "@sinco/react";
import {
  Autocomplete,
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Rating,
  Select,
  SelectChangeEvent,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import {
  Add,
  ArrowBack,
  WhatsApp,
  PersonPin,
  MapsHomeWork,
  OtherHouses,
  Paid,
  RunningWithErrors,
  PhoneEnabled,
  MailOutline,
  AssignmentIndOutlined,
  Person,
  TextSnippet,
  MarkEmailRead,
  FormatListBulleted,
  DateRangeOutlined,
  Done,
  AttachMoney,
  DoNotDisturb,
  Today,
} from "@mui/icons-material";

const RegistroTerceros = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <PageHeader
        fixed={true}
        title="Administracion de visitas y visitantes"
        buttonBack={
          <IconButton size="small" color="primary">
            <ArrowBack fontSize="small" />
          </IconButton>
        }
      />
      <Card sx={{ width: 310, mt: 7.5, position: "fixed" }}>
        <CardContent
          sx={{
            gap: 1,
            display: "flex",
            flexDirection: "column",
            height: 500,
          }}
        >
          <Autocomplete
            options={dataAutocomplete}
            renderInput={(params) => <TextField {...params} label="Nombre" />}
          />
          <Button
            fullWidth
            size="small"
            color="primary"
            variant="outlined"
            startIcon={<Add />}
          >
            Agregar visitante
          </Button>
          <Stack>
            <List>
              <ListItem sx={{ gap: 1, display: "flex" }}>
                <Avatar sx={{ width: 30, height: 30 }}>sv</Avatar>
                <ListItemText>
                  <Typography variant="body2" color={"text.primary"}>
                    Johan Sebastian Vera
                  </Typography>
                  <Typography variant="caption" color={"text.secondary"}>
                    sebas.vera@gmail.com
                  </Typography>
                </ListItemText>
                <Badge variant="dot" color="success">
                  <WhatsApp fontSize="medium" color="success" />
                </Badge>
              </ListItem>
            </List>
            <Tabs
              sx={{
                ".MuiTab-root": {
                  justifyContent: "flex-start",
                },
              }}
              indicatorColor="primary"
              orientation="vertical"
              value={1}
            >
              <Tab iconPosition="start" icon={<PersonPin />} label="Visitas" />
              <Tab
                iconPosition="start"
                icon={<MapsHomeWork />}
                label="Ventas"
              />
              <Tab
                iconPosition="start"
                icon={<OtherHouses />}
                label="Arriendos"
              />
              <Tab
                iconPosition="start"
                icon={<Paid />}
                label="Consignaciones"
              />
              <Tab
                iconPosition="start"
                icon={<RunningWithErrors />}
                label="Desistimiento"
              />
            </Tabs>
          </Stack>
        </CardContent>
      </Card>
      <Stack ml={40} pt={7.5} gap={1.5}>
        <Card
          sx={{
            width: 784,
            backgroundColor: "#E6EFF6",
            position: "fixed",
            zIndex: 1,
          }}
        >
          <CardContent
            sx={{ display: "flex", gap: 1, flexDirection: "column" }}
          >
            <Stack>
              <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
                <Typography variant="h6" color="text.primary">
                  Sebastian Vera
                </Typography>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>
            </Stack>
            <Stack gap={1} flexDirection={"row"}>
              <Stack flexDirection={"row"} gap={0.5}>
                <PhoneEnabled color="action" fontSize="small" />
                <Typography variant="body2" color={"text.primary"}>
                  321 356 4789
                </Typography>
              </Stack>
              <Stack flexDirection={"row"} gap={0.5}>
                <AssignmentIndOutlined color="action" fontSize="small" />
                <Typography variant="body2" color={"text.primary"}>
                  C.C: 1010157173
                </Typography>
              </Stack>
              <Stack flexDirection={"row"} gap={0.5}>
                <MailOutline color="action" fontSize="small" />
                <Typography variant="body2" color={"text.primary"}>
                  Sebas.vera@gmail.com
                </Typography>
              </Stack>
            </Stack>
            <Stack flexDirection={"row"} gap={1}>
              <Button
                size="small"
                color="primary"
                variant="text"
                startIcon={<Person />}
              >
                Ver más
              </Button>
              <Button
                size="small"
                color="primary"
                variant="text"
                startIcon={<TextSnippet />}
              >
                Aplicar encuesta
              </Button>
              <Button
                size="small"
                color="primary"
                variant="text"
                startIcon={<MarkEmailRead />}
              >
                Correo
              </Button>
              <Button
                size="small"
                color="primary"
                variant="text"
                startIcon={<FormatListBulleted />}
              >
                Historial de observaciones
              </Button>
              <Button size="small" color="primary" variant="text">
                Chat
                <Badge variant="dot" color="success">
                  <WhatsApp fontSize="medium" color="success" />
                </Badge>
              </Button>
            </Stack>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 784,
            mt: 17.5,
          }}
        >
          <CardContent>
            <Stack gap={0.5}>
              <Tabs indicatorColor="primary" value={0} variant="scrollable">
                <Tab
                  iconPosition="start"
                  label="Laureles Altos de l...
                  APT-2-702"
                />
                <Tab
                  iconPosition="start"
                  label="Laureles Altos de l...
                  APT-2-702"
                />
                <Tab
                  iconPosition="start"
                  label="Laureles Altos de l...
                  APT-2-702"
                />
                <Tab
                  iconPosition="start"
                  label="Laureles Altos de l...
                  APT-2-702"
                />
                <Tab
                  iconPosition="start"
                  label="Laureles Altos de l...
                  APT-2-702"
                />
              </Tabs>
              <Stack gap={3}>
                <Stack gap={0.5}>
                  <Stack
                    p={"8px 0"}
                    gap={1.5}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <Stack gap={1} flexDirection={"row"} alignItems={"center"}>
                      <Typography variant="subtitle2" color={"text.primary"}>
                        Clasificación de lead
                      </Typography>
                      <FormControl sx={{ width: 235 }}>
                        <InputLabel>Age</InputLabel>
                        <Select
                          id="demo-select-small"
                          value={age}
                          label="Selecciona una Opción"
                          onChange={undefined}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>
                    <Stack gap={1} flexDirection={"row"}>
                      <Typography variant="subtitle2" color="text.primary">
                        Origen de información:
                      </Typography>
                      <Typography variant="subtitle2" color="text.primary">
                        ERP
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Card sx={{ background: (theme) => theme.palette.grey[50] }}>
                <CardContent>
                  <Stack padding={2} gap={1}>
                    <Stack gap={1} flexDirection={"row"}>
                      <LinearProgress
                        sx={{ width: 160 }}
                        variant="determinate"
                        value={100}
                        color="primary"
                      />
                      <LinearProgress
                        sx={{ width: 160 }}
                        variant="determinate"
                        value={100}
                        color="secondary"
                      />
                      <LinearProgress
                        sx={{ width: 160 }}
                        variant="determinate"
                        value={100}
                        color="warning"
                      />
                      <LinearProgress
                        sx={{ width: 160 }}
                        variant="determinate"
                        value={100}
                        color="success"
                      />
                    </Stack>
                    <Stack
                      flexDirection={"row"}
                      justifyContent={"space-around"}
                    >
                      <Typography variant="caption" color={"text.primary"}>
                        Lead
                      </Typography>
                      <Typography variant="caption" color={"text.primary"}>
                        Oportunidad
                      </Typography>
                      <Typography variant="caption" color={"text.primary"}>
                        Prospecto
                      </Typography>
                      <Typography variant="caption" color={"text.primary"}>
                        Comprador
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    <Stack p={3} gap={1}>
                      <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant="subtitle2" color={"primary.main"}>
                          Proyecto:
                        </Typography>
                        <Typography variant="body2" color={"text.primary"}>
                          Arboleda de Chicala 2
                        </Typography>
                        <Rating
                          name="half-rating"
                          defaultValue={2.5}
                          precision={0.5}
                        />
                      </Stack>
                      <Stack
                        flexDirection={"row"}
                        alignItems={"center"}
                        gap={0.4}
                      >
                        <Typography
                          variant="subtitle2"
                          color={"text.secondary"}
                        >
                          Macroproyecto:
                        </Typography>
                        <Typography variant="body2" color={"text.secondary"}>
                          ARBOLEDA DE CHICALA
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      justifyContent={"center"}
                      alignItems={"center"}
                      flexDirection={"row"}
                      gap={1}
                    >
                      <Badge variant="dot" color="success" />
                      <Typography variant="body2" color={"text.primary"}>
                        Disponible
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Stack gap={1} flexDirection={"row"} justifyContent={"flex-end"}>
                <Button
                  color="primary"
                  variant="text"
                  startIcon={<DateRangeOutlined />}
                >
                  Reservar
                </Button>
                <Button color="primary" variant="text" startIcon={<Done />}>
                  Autorizar reserva
                </Button>
                <Button disabled variant="text" startIcon={<AttachMoney />}>
                  Confirmar ventax
                </Button>
                <Button
                  color="primary"
                  variant="text"
                  startIcon={<DoNotDisturb />}
                >
                  Oportunidad perdida
                </Button>
              </Stack>
              <Stack gap={1}>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Stack flexDirection={"row"} gap={0.5} alignItems={"center"}>
                    <Typography variant="subtitle2" color={"primary.main"}>
                      Fecha reserva inicio:
                    </Typography>
                    <Typography variant="subtitle2" color={"text. primary"}>
                      01/01/2023
                    </Typography>
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"flex-start"}
                    gap={0.5}
                    alignItems={"center"}
                  >
                    <Typography variant="subtitle2" color={"primary.main"}>
                      Fecha fin de reserva:{" "}
                    </Typography>
                    <Typography variant="subtitle2" color={"text. primary"}>
                      01/01/2023
                    </Typography>
                  </Stack>
                </Stack>
                <Stack gap={0.5} flexDirection={"row"}>
                  <TextField
                    label="Fecha visita"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton size="small">
                            <Today fontSize="small" />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField label="Ciudad de atencion" />
                  <TextField label="Proyecto" />
                  <TextField label="Unidad" />
                </Stack>
                <Stack gap={0.5} flexDirection={"row"}>
                  <TextField label="Atendido por" />
                  <TextField label="Medio Publicitario" />
                  <TextField
                    label="Fecha de estudio crediticio"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton size="small">
                            <Today fontSize="small" />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
};
const dataAutocomplete = [
  { label: "Sebastian" },
  { label: "Sebastian" },
  { label: "Sebastian" },
  { label: "Sebastian" },
  { label: "Sebastian" },
];
export default RegistroTerceros;
