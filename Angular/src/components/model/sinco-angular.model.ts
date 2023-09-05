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

export type Estados = 'create' | 'error' | 'noresult' | 'search';

export enum UrlImagen {
  error = '/public/error.png',
  search = '/public/search.png',
  noresult = '/public/no-result.png',
  create = '/public/create.png',
}
