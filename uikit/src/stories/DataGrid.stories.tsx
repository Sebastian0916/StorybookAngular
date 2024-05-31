import React from "react";
import { Meta } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { SincoTheme } from "@sinco/react";
import { DataGridPro, LicenseInfo } from "@mui/x-data-grid-pro";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";
import "../index.css";

LicenseInfo.setLicenseKey(
  "43dba252c9426d53421f13de6ce4f3fcTz04OTgyOCxFPTE3NDY2MzQ1NzAwMDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI="
);

const meta: Meta<typeof DataGridPro> = {
  title: "Mui x/DataGrid",
  component: DataGridPro,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default meta;

const getColorByHierarchy = (hierarchy: string | any[]) => {
  if (hierarchy.length === 0) {
    return ""; // No color for rows with no hierarchy
  } else if (hierarchy.length === 1) {
    return SincoTheme.palette.grey[100];
  } else if (hierarchy.length === 2) {
    return SincoTheme.palette.grey[200];
  } else if (hierarchy.length === 3) {
    return SincoTheme.palette.grey[300];
  } else {
    return SincoTheme.palette.grey[400];
  }
};

// Definir las jerarquías aquí
const hierarchies = [
  {
    id: 0,
    hierarchy: ["Thomas"],
  },
  {
    id: 2,
    hierarchy: ["Thomas", "Robert"],
  },
  {
    id: 3,
    hierarchy: ["Thomas", "Robert", "Karen"],
  },
  {
    id: 4,
    hierarchy: ["Thomas", "Robert", "Karen", "Nancy"],
  },
  {
    id: 5,
    hierarchy: ["Thomas", "Robert", "Karen", "Nancy", "Daniel"],
  },
  {
    id: 6,
    jobTitle: "Head of Sales",
    recruitmentDate: new Date(2017, 3, 4),
    hierarchy: ["Thomas", "Robert", "Karen", "Nancy", "Daniel", "Christopher"],
  },
];

const rows = hierarchies.map((item) => ({
  ...item,
  color: getColorByHierarchy(item.hierarchy),
}));

const columns = [
  { field: "codigo", headerName: "Codigo", width: 200 },

  { field: "jobTitle", headerName: "Job Title", width: 200 },
  {
    field: "recruitmentDate",
    headerName: "Recruitment Date",
    type: "date",
    width: 150,
  },
];

const getTreeDataPath = (row: { hierarchy: any }) => row.hierarchy;

export const Drawer = {
  name: "DataGrid",
  args: {},
  render: () => (
    <DataGridPro
      treeData
      rows={rows}
      columns={columns}
      getTreeDataPath={getTreeDataPath}
      disableRowSelectionOnClick
      getRowClassName={(params) => {
        const hierarchyLength = params.row.hierarchy.length;
        return hierarchyLength > 4 ? "depth-4" : `depth-${hierarchyLength}`;
      }}
    />
  ),
};
