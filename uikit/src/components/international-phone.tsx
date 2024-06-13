import {
  InputAdornment,
  TextField,
  Menu,
  MenuItem,
  Typography,
  Stack,
} from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { FC, useState } from "react";
export interface PhoneProps {
  value: string;
  onChange: (phone: string) => void;
}
const banderas = [
  {
    code: "us",
    prefix: "+1",
    bandera:
      "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1f8.svg",
    name: "EE.UU",
  },
  {
    code: "co",
    prefix: "+57",
    bandera:
      "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e8-1f1f4.svg",
    name: "Colombia",
  },

  {
    code: "af",
    prefix: "+93",
    bandera:
      "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e6-1f1eb.svg",
    name: "Afganistan",
  },
  {
    code: "ab",
    prefix: "+355",
    bandera:
      "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e6-1f1f1.svg",
    name: "Albania",
  },
  {
    code: "aL",
    prefix: "+213",
    bandera:
      "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e9-1f1ff.svg",
    name: "Algeria",
  },
];
export const InternationalPhone: FC<PhoneProps> = () => {
  const [selectedCode, setSelectedCode] = useState(banderas[0].prefix);
  const [phoneNumber, setPhoneNumber] = useState(banderas[0].prefix);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (prefix: string) => {
    setSelectedCode(prefix);
    setPhoneNumber(prefix);
    handleClose();
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value;
    const prefix = selectedCode;
    if (input.startsWith(prefix)) {
      setPhoneNumber(input);
    } else {
      setPhoneNumber(prefix + input.replace(/^\+?[0-9]*/, " "));
    }
  };

  return (
    <TextField
      size="small"
      placeholder="Phone number"
      label="Phone number"
      value={phoneNumber}
      onChange={handlePhoneNumberChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Stack
              onClick={handleClick}
              flexDirection={"row"}
              alignItems={"center"}
            >
              {banderas.map((flag) =>
                flag.prefix === selectedCode ? (
                  <img
                    key={flag.code}
                    src={flag.bandera}
                    alt={`Flag for ${flag.code.toUpperCase()}`}
                    width="20"
                    height="20"
                  />
                ) : null
              )}
              <ArrowDropDown fontSize="small" />
            </Stack>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {banderas.map((flag) => (
                <MenuItem
                  key={flag.code}
                  onClick={() => handleMenuItemClick(flag.prefix)}
                  sx={{ gap: 1, p: 1 }}
                >
                  <img
                    src={flag.bandera}
                    alt={`Flag for ${flag.code.toUpperCase()}`}
                    width="20"
                    height="20"
                  />
                  <Typography color="text.primary" variant="body1">
                    {flag.name}
                  </Typography>
                  <Typography variant="body2">{flag.prefix}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </InputAdornment>
        ),
      }}
    />
  );
};
