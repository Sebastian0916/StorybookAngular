import React, { ReactNode, useState } from 'react';
import { IconButton, Stack, Typography, Drawer, SxProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SincoTheme } from '@sinco/react';

export type handleDrawerPosition = 'left' | 'right';

export interface DrawerComponentProperties {
  title: string;
  children: ReactNode;
  renderActions: ReactNode;
  showActions?: boolean;
  anchor?: handleDrawerPosition;
  width: string;
  open: boolean;
  onClose: () => void;
  sx?: SxProps;
}

export const DrawerComponent = ({
  title,
  children,
  renderActions,
  showActions,
  anchor = 'left',
  width,
  open,
  onClose,
  sx,
}: DrawerComponentProperties) => {
  const [stateActions, setActionsState] = useState(showActions);

  const handleDrawerActions = () => {
    setActionsState(true);
  };

  const borderStyles: SxProps =
    anchor === 'right'
      ? { borderTopLeftRadius: '4px' }
      : { borderTopRightRadius: '4px' };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: '#F0f0f099 !important',
          backdropFilter: 'blur(4px)',
        },
        '& .MuiDrawer-paper': {
          width: width,
          ...borderStyles,
        },
      }}
    >
      <Stack height="100%">
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          py={1.5}
          px={1}
          bgcolor={SincoTheme.palette.secondary.main}
        >
          <Typography
            sx={{
              ...SincoTheme.typography.h6,
              ...sx,
            }}
            variant="h6"
          >
            {title}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Stack
          py={1.5}
          px={1}
          overflow="auto"
          height="-webkit-fill-available"
          onClick={handleDrawerActions}
        >
          {children}
        </Stack>
        {stateActions && (
          <Stack gap={1} mt={0.5} py={1.5} px={1} bgcolor="#F1F0EE">
            {renderActions}
          </Stack>
        )}
      </Stack>
    </Drawer>
  );
};
