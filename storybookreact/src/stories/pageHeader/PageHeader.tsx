import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import React from "react";

interface BreadcrumbCode {
  link: string;
  name: string;
}
interface Pageheader {
  back?: React.ReactNode;
  title?: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbCode[];
  actions?: React.ReactNode;
  tabs?: React.ReactNode;
}

const PageContent = styled(Stack)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow:
    "0px 1px 3px rgba(24, 39, 75, 0.12), 0px 1px 1px -1px rgba(24, 39, 75, 0.14), 0px 2px 1px -2px rgba(24, 39, 75, 0.2)",
  zIndex: 100,
  padding: "8px 24px",
  justifyContent: "space-between",
  minHeight: 39,
  position: "fixed",
  width: "100%",
}));
const PageHeader = (page: Pageheader) => {
  return (
    <div style={{ minHeight: 56 }}>
      <PageContent>
        {Array.isArray(page.breadcrumbs) && page.breadcrumbs.length > 0 && (
          <Breadcrumbs>
            {page.breadcrumbs.map((element, i) => {
              return (
                <Link
                  underline="hover"
                  color="inherit"
                  href={element.link}
                  key={i}
                >
                  {element.name}
                </Link>
              );
            })}
          </Breadcrumbs>
        )}
        <Stack
          width="90%"
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
        >
          <Stack gap={1.5} flexDirection="row" alignItems="center">
            {page.back}
            <Stack>
              <Typography variant="h6" color="text.primary">
                {page.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {page.subtitle}
              </Typography>
            </Stack>
          </Stack>
          <Stack gap={1} alignItems="center" flexDirection="row">
            {page.actions}
          </Stack>
        </Stack>
        {page.tabs}
      </PageContent>
    </div>
  );
};

export default PageHeader;
