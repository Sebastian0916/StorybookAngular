import { Stack, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import React from "react";

export interface PageheaderProperties {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  actions?: React.ReactNode;
  buttonBack?: React.ReactNode;
  fixed?: boolean;
}
export function PageHeaderWraps({
  item,
  Color,
  variant,
}: {
  item: string | React.ReactNode;
  Color: string;
  variant: Variant;
}) {
  return (
    <Typography variant={variant} color={Color}>
      {item}
    </Typography>
  );
}

export const PageHeaderComponent = ({
  title,
  subtitle,
  actions,
  buttonBack,
  fixed,
}: PageheaderProperties) => {
  return (
    <Stack
      position={fixed ? "fixed" : "relative"}
      width={fixed ? "100%" : "inherit"}
      bgcolor="background.paper"
      sx={{
        boxShadow: (theme) => theme.shadows[1],
        zIndex: 100,
      }}
    >
      <Stack
        px={3}
        py={1}
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <Stack gap={1.5} flexDirection="row" alignItems="center">
          {buttonBack}
          <Stack>
            <Stack>
              <PageHeaderWraps Color="text.primary" item={title} variant="h6" />
            </Stack>
            {subtitle && (
              <Stack alignItems="center" flexDirection="row" gap={2}>
                <PageHeaderWraps
                  Color="text.secondary"
                  item={subtitle}
                  variant="caption"
                />
              </Stack>
            )}
          </Stack>
        </Stack>
        {actions && (
          <Stack gap={1} alignItems="center" flexDirection="row">
            {actions}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
