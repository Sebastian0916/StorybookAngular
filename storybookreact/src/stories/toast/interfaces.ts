import { ReactElement } from "react";

export interface Option { }

export interface Toast {
  type?: string;
  subtitle?: string;
  time?: number | any;
  title?: string;
  dataOpt?: Option[];
  actions?: React.ReactNode;
  seeMore?: boolean;
}

export interface IconMap {
  [key: string]: ReactElement;
}

export interface ColorMap {
  [key: string]: "success" | "error" | "warning" | "info";
}
