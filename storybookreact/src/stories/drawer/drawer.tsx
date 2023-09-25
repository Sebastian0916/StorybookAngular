import React, { ReactNode, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import { ThemeProvider } from '@mui/material/styles';
import { SincoTheme } from '@sinco/react';

const DrawerContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'flex-start',
  justifyContent: 'space-between',
  height: '100%',
  overflow: 'hidden',
};

const DrawerHeader = {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'secondary.main',
  py: '12px',
  px: '8px',
};

const DrawerContent = {
  display: 'flex',
  overflow: 'auto',
  alignItems: 'flex-start',
  flexDirection: 'column',
  height: '-webkit-fill-available',
  py: '12px',
  px: '8px',
};

const DrawerActions = {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'flex-end',
  borderTop: '1px solid rgba(16, 24, 64, 0.23)',
  backgroundColor: '#F1F0EE',
  gap: '8px',
  mt: '4px',
  py: '12px',
  px: '8px',
};

export type handleDrawerPosition = 'left' | 'right';

export interface DrawerComponentProperties {
  title: string;
  children: ReactNode;
  renderActions: ReactNode;
  showActions?: boolean;
  position?: handleDrawerPosition;
  width: string;
  open: boolean;
  onClose: () => void;
}

export const DrawerComponent = ({
  title,
  children,
  renderActions,
  showActions,
  position,
  width,
  open,
  onClose,
}: DrawerComponentProperties) => {
  const [stateActions, setActionsState] = useState(showActions);

  const handleDrawerActions = () => {
    setActionsState(true);
  };

  return (
    <ThemeProvider theme={SincoTheme}>
      <Drawer anchor={position} open={open} onClose={onClose}>
        <Box sx={DrawerContainer} width={width}>
          <Box sx={DrawerHeader}>
            <Typography variant="h6">{title}</Typography>
            <Box>
              <IconButton onClick={onClose} size="small">
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          <Box sx={DrawerContent} onClick={handleDrawerActions}>
            {children}
          </Box>
          {stateActions && <Box sx={DrawerActions}>{renderActions}</Box>}
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};