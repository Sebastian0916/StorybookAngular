import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AngularModule, Size } from '@sinco/angular';
import { Component, Input } from '@angular/core';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
  
const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
    selector: 'app-table-container',
    template:`
        <table mat-table [dataSource]="dataSource" class="mat-elevation-z8" [size]="size">
          
            <ng-container matColumnDef="position">
              <th mat-header-cell *matHeaderCellDef> No. </th>
              <td mat-cell *matCellDef="let element"> {{element.position}} </td>
            </ng-container>
            
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef> Name </th>
              <td mat-cell *matCellDef="let element"> {{element.name}} </td>
            </ng-container>
            
            <ng-container matColumnDef="weight">
              <th mat-header-cell *matHeaderCellDef> Weight </th>
              <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
            </ng-container>
            
            <ng-container matColumnDef="symbol">
              <th mat-header-cell *matHeaderCellDef> Symbol </th>
              <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
            </ng-container>
            
            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
            
            
    `
})  

class tableContainerComponent {
    @Input() size!:Size;
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
}


export default {
  title: 'Angular Material/table',
  decorators: [
    moduleMetadata({
        declarations:[tableContainerComponent],
      imports: [AngularModule],
    }),
  ],

  tags: ['autodocs'],
  parameters:{
    backgrounds: {
        default: 'erpBg',
        values: [
          { name: 'erpBg', value: '#f1f0ee' },
        ],
    }
  }
  
} as Meta;
type Story = StoryObj;

export const table_small: Story = {
  name: 'table-small',
  render: () => ({
    template: `
      <div class="mat-typography ">
          <app-table-container />
      </div>
    `,
  }),

};
  


export const table_medium: Story = {
    name: 'table-medium',
    render: () => ({
      template: `
        <div class="mat-typography ">
            <app-table-container size="medium"/>
        </div>
      `,
    }),
  
  };
  
