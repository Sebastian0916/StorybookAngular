import { Meta, StoryObj } from "@storybook/angular";
import { ProgressComponent } from "@sinco/angular";

export default {
    title: 'Angular Material/ProgressERP',
    component: ProgressComponent,
    parameters: {
        layout: "centered"
    },
    argTypes: {
        hideLogo: {
            options: [true, false],
            description: 'Oculta el logo del componente cuando su valor es `false`',
        },
        loadingText: {
            description: "Texto indicador de estado de carga"
        },
        progressIndicator: {
            description: "Texto indicador del progreso, example: '4 de 100 completos'"
        },
        variant: {
            options: ['determinate', 'indeterminate'],
            control: { type: 'radio' },
            description: "Define variante 'determinate' o 'indeterminate'"
        },
        value: {
            defaultValue: 50,
            description: "Modifica el % de llenado de la barra de progreso"
        }
    }
} as Meta;

type Story = StoryObj;

export const ProgressERP: Story = {
    name: "Progress ERP",
    args: {
        hideLogo: false,
        loadingText: 'Texto indicativo del estado de carga',
        progressIndicator: '4 de 100 completos',
        value: 50,
        variant: 'determinate',
    }
}