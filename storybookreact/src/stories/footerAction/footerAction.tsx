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
        <AppBar
          position="fixed"
          color="inherit"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar sx={{ gap: 1.5, minHeight: "50px !important" }}>
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
