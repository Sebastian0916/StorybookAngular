import { ReactNode } from 'react';

export type Anchor = "left" | "right";

export interface DrawerComponentProps {
  titulo: string;
  children: ReactNode;
  acciones: ReactNode;
  open: boolean;
  onClose: () => void;
  anchor?: Anchor;
}