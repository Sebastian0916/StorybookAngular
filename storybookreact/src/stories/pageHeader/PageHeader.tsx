import { Divider, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { SincoTheme } from "@sinco/react";

interface PageheaderProperties {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  buttonBack?: React.ReactNode;
  fixed?: boolean;
  date?: boolean;
}
export const PageHeaderContent = styled(Stack)(() => ({
  backgroundColor: "#fff",
  boxShadow:
    "0px 1px 3px rgba(24, 39, 75, 0.12), 0px 1px 1px -1px rgba(24, 39, 75, 0.14), 0px 2px 1px -2px rgba(24, 39, 75, 0.2)",
  zIndex: 100,
  padding: "8px 24px",
}));

export const PageHeaderComponent = ({
  title,
  subtitle,
  actions,
  buttonBack,
  fixed,
  date,
}: PageheaderProperties) => {
  const [currentDate] = useState(date ? new Date() : null);
  return (
    <ThemeProvider theme={SincoTheme}>
      <PageHeaderContent
        position={fixed === true ? "fixed" : "relative"}
        sx={{ width: fixed === true ? "-webkit-fill-available" : "inherit" }}
      >
        <Stack
          width="100%"
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
        >
          <Stack gap={1.5} flexDirection="row" alignItems="center">
            {buttonBack}
            <Stack>
              <Stack>
                <Typography variant="h6" color="text.primary">
                  {title}
                </Typography>
              </Stack>
              <Stack alignItems={"center"} flexDirection={"row"} gap={2}>
                <Typography variant="caption" color="text.secondary">
                  {subtitle}
                </Typography>
                {currentDate && (
                  <>
                    <Divider flexItem orientation="vertical" />
                    <Typography variant="caption" color="text.secondary">
                      Fecha:{currentDate.toLocaleString()}
                    </Typography>
                  </>
                )}
              </Stack>
            </Stack>
          </Stack>
          <Stack gap={1} alignItems="center" flexDirection="row">
            {actions}
          </Stack>
        </Stack>
      </PageHeaderContent>
    </ThemeProvider>
  );
};
