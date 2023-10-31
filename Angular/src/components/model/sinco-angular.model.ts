export interface RangoFechas {
  fechaInicial: number;
  fechaFinal: number;
}

export interface DiaConEvento {
  dia: Date;
  claseCss: string;
}

export interface ChipModel {
  texto: string;
  color?: string;
  icono?: string;
  variante?: string;
  size?: Size;
  selected?: boolean;
  cancel?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valor?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventoClick?: (valor: any) => void;
}

export enum Color {
  'primary',
  'accent',
  'warn',
}

export enum Orientation {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export type DiasConEvento = DiaConEvento[];

export type ModeAlert = 'standard' | 'filled' | 'outlined';

export type TypeAlerts = 'success' | 'info' | 'warning' | 'error';

export type Colores =
  | 'primary'
  | 'accent'
  | 'warn'
  | 'success'
  | 'caution'
  | 'warning';

export type Size = 'small' | 'medium' | 'large';

export type ChipsModel = ChipModel[];

export type Estados = 'crear' | 'error' | 'sinresultado' | 'busqueda';

export const UrlImagen: Record<Estados, string> = {
  error: '../../assets/emptyState-icons.svg#error',
  busqueda: '../../assets/emptyState-icons.svg#search',
  sinresultado: '../../assets/emptyState-icons.svg#noresult',
  crear: '../../assets/emptyState-icons.svg#create',
};
