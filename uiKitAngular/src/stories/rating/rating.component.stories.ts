import { MatIconModule } from '@angular/material/icon';
import { Meta, moduleMetadata } from '@storybook/angular';
import { SizeDirective } from '@sinco/angular';
import { RatingComponent } from 'src/components/rating/rating.component';

export default {
  title: 'Angular Material/RatingComponent',
  component: RatingComponent,
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatIconModule],
    }),
  ],
  parameters: {
    layout: "centered"
  },
  tags: ['autodocs'],
  argTypes:{
    value:{
      description:'puntaje general asignado al rango'
    },
    max:{
      description:'rango total de puntuacion para calificar.',
      defaultValue:{summary:5},
      control:{type:'number'}
    },
    precision:{
      description:'opcion que permite redondear valores numericos en caso de que el valor del puntaje asignado sea un numero decimal.',
      defaultValue:{summary:1},
    },
    size:{
      description:'tamaños personalizados basados en el tamaño de letra del componente, posee tres variantes `small`, `medium` y `large`.',
      options:['small','medium','large'],
      control:{type:'select'},
      defaultValue:{summary:'small'}
    },
    disabled:{
      description:'opcion que representa un estado desabilitado',
      defaultValue:{summary:false}
    }

    
  }
} as Meta<RatingComponent>;

export const rating = {
  args: {
    value: 3.35,
    max: 5,
    precision: 0.01,
    size: "small",
    disabled: false,
  },
};
