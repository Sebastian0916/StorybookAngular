import { ReactNode } from "react";
import '../../assets/create.svg';
export interface EmptyStatePropertys {
  state?: States;
  title?: string;
  content?: string;
  actions?: ReactNode;
}

export type States = "create" | "error" | "noresult" | "search";

export enum UrlImage {
  error = "src/assets/error.svg",
  search = "src/assets/search.svg",
  noresult = "src/assets/no-result.svg",
  create = '../../assets/create.svg',
}
