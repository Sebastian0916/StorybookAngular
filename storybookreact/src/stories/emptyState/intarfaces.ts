import { ReactNode } from "react";

export interface EmptyStatePropertys {
  state?: States;
  title?: string;
  content?: string;
  actions?: ReactNode;
}

export type States = "create" | "error" | "noresult" | "search";

export enum UrlImage {
  error = "public/assets/error.svg",
  search = "public/assets/search.svg",
  noresult = "public/assets/no-result.svg",
  create = "public/assets/create.svg",
}
