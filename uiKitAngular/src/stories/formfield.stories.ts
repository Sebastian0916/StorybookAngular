import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { AngularModule, Size } from '@sinco/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms';

@Component({
    selector:'app-autocomplete-container',
    template:`
    <mat-form-field class="col-12"  appearance="outline" [floatLabel]="'always'">
    <mat-label>panel-option-{{size !== 'medium'?'small':'medium'}}</mat-label>
    
    <input type="text"
           placeholder="Pick one"
           matInput
           [formControl]="myControl"
           [matAutocomplete]="auto">
    <mat-autocomplete #auto="matAutocomplete" [class]="mediumGetter" 
    >
      <mat-option *ngFor="let option of options" [value]="option">
        {{option}}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
    `
})

class ContainerAutocompleteComponent{
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  @Input()size!:Size;

  get mediumGetter ():string{
    return this.size == 'medium'?'mat-option-medium':'';
  }
}

export default {
    title: 'Angular Material/form-field',
    decorators: [
        moduleMetadata({
            declarations:[ContainerAutocompleteComponent],
            imports: [AngularModule, BrowserAnimationsModule],
        }),
    ],
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs']
} as Meta;
type Story = StoryObj;

export const formfield_input: Story = {
    name: 'formfield-input',
    render: () => ({
        template: `
      <div class="mat-typography ">
        <div class="row gap-2 align-items-start">
              <mat-form-field class="col" appearance="outline" [floatLabel]="'always'" >
                    <mat-label>small</mat-label>
                    <input matInput placeholder="small">
              </mat-form-field>
              <mat-form-field class="col" appearance="fill" [floatLabel]="'always'" >
                <mat-label>small</mat-label>
                <input matInput placeholder="small">
              </mat-form-field>
             
              <mat-form-field class="col" standard [floatLabel]="'always'" >
                <mat-label>small</mat-label>
                <input matInput placeholder="small">
              </mat-form-field>
        </div>
        <br>
        <div class="row gap-2 align-items-end">
              <mat-form-field class="col" size="medium" appearance="outline" [floatLabel]="'always'" >
                    <mat-label>medium</mat-label>
                    <input matInput placeholder="medium">
              </mat-form-field>
              <mat-form-field class="col" size="medium" appearance="fill" [floatLabel]="'always'" >
                <mat-label>medium</mat-label>
                <input matInput placeholder="medium">
              </mat-form-field>
             
              <mat-form-field class="col" size="medium" standard [floatLabel]="'always'" >
                <mat-label>medium</mat-label>
                <input matInput placeholder="medium">
              </mat-form-field>
        </div>
      </div>
    `,
    }),

};
export const formfield_input_icons: Story = {
    name: 'formfield-input-icons',
    render: () => ({
        template: `
        <div class="mat-typography ">
            <div class="col-12 row gap-2 align-items-start">
                <mat-form-field class="col" appearance="outline" [floatLabel]="'always'" >
                      <mat-label>small</mat-label>
                      <input matInput placeholder="small">
                          <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>

                </mat-form-field>
                <mat-form-field class="col" appearance="fill" [floatLabel]="'always'" >
                  <mat-label>small</mat-label>
                  <input matInput placeholder="small">
                      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>

                </mat-form-field>
                <mat-form-field class="col" standard [floatLabel]="'always'" >
                  <mat-label>small</mat-label>
                  <input matInput placeholder="small">
                      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>

                </mat-form-field>
            </div>
            <br>
            <div class="col-12 row gap-2 align-items-start">
              <mat-form-field class="col" appearance="outline" [floatLabel]="'always'" >
                <mat-label>small</mat-label>
                <input matInput placeholder="small">
                <mat-icon matPrefix>sentiment_very_satisfied</mat-icon>
              </mat-form-field>
              <mat-form-field class="col" appearance="fill" [floatLabel]="'always'" >
                <mat-label>small</mat-label>
                <input matInput placeholder="small">
                <mat-icon matPrefix>sentiment_very_satisfied</mat-icon>
              </mat-form-field>
              <mat-form-field class="col" standard [floatLabel]="'always'" >
                <mat-label>small</mat-label>
                <input matInput placeholder="small">
                    <mat-icon matPrefix>sentiment_very_satisfied</mat-icon>
              </mat-form-field>
            </div>
            <br>
            <div class="col-12 row gap-2 align-items-end">
                <mat-form-field class="col" size="medium" appearance="outline" [floatLabel]="'always'" >
                    <mat-label>medium</mat-label>
                    <input matInput placeholder="medium">
                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
                </mat-form-field>
                <mat-form-field class="col" size="medium" appearance="fill" [floatLabel]="'always'" >
                  <mat-label>medium</mat-label>
                  <input matInput placeholder="medium">
                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
                </mat-form-field>
                <mat-form-field class="col" size="medium" standard [floatLabel]="'always'" >
                  <mat-label>medium</mat-label>
                  <input matInput placeholder="medium">
                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
                </mat-form-field>
            </div>
            <br>
            <div class="col-12 row gap-2 align-items-end">
                <mat-form-field class="col" size="medium" appearance="outline" [floatLabel]="'always'" >
                    <mat-label>medium</mat-label>
                    <input matInput placeholder="medium">
                    <mat-icon matPrefix>sentiment_very_satisfied</mat-icon>
                </mat-form-field>
                <mat-form-field class="col" size="medium" appearance="fill" [floatLabel]="'always'" >
                  <mat-label>medium</mat-label>
                  <input matInput placeholder="medium">
                    <mat-icon matPrefix>sentiment_very_satisfied</mat-icon>
                </mat-form-field>
                <mat-form-field class="col" size="medium" standard [floatLabel]="'always'" >
                  <mat-label>medium</mat-label>
                  <input matInput placeholder="medium">
                    <mat-icon matPrefix>sentiment_very_satisfied</mat-icon>
                </mat-form-field>
            </div>
        </div>
      `,
    }),

};

export const formfield_autocomplete_small: Story = {
    name: 'formfield-autocomplete-panel-small',
    render: () => ({
        template: `
        <div class="mat-typography ">
            <app-autocomplete-container class="col-12"/>
        </div>
      `,
    }),

};
export const formfield_autocomplete_medium: Story = {
    name: 'formfield-autocomplete-panel-medium',
    render: () => ({
        template: `
        <div class="mat-typography ">
            <app-autocomplete-container size="medium"/>
        </div>
      `,
    }),

};

export const formfield_select_small: Story = {
    name: 'formfield-select-panel-small',
    render: () => ({
        template: `
        <div class="mat-typography ">
            <div class="col-12 row gap-2 align-items-start">
            <mat-form-field appearance="outline" [floatLabel]="'always'">
                <mat-label>panel-options-small</mat-label>
                <mat-select disableRipple value="1">
                  <mat-option value="1">Option 1</mat-option>
                  <mat-option value="2">Option 2</mat-option>
                  <mat-option value="3">Option 3</mat-option>
                </mat-select>
              </mat-form-field>
            </div>
        </div>
      `,
    }),

};
export const formfield_select_medium: Story = {
    name: 'formfield-select-panel-medium',
    render: () => ({
        template: `
        <div class="mat-typography ">
            <div class="col-12 row gap-2 align-items-start">
            <mat-form-field appearance="outline" [floatLabel]="'always'">
                <mat-label>panel-options-medium</mat-label>
                <mat-select disableRipple value="1" panelClass="mat-option-medium">
                  <mat-option value="1">Option 1</mat-option>
                  <mat-option value="2">Option 2</mat-option>
                  <mat-option value="3">Option 3</mat-option>
                </mat-select>
              </mat-form-field>
            </div>
        </div>
      `,
    }),

};
export const formfield_DatePicker_small: Story = {
    name: 'formfield-date-Picker-small',
    render: () => ({
        template: `
      <div class="mat-typography ">
        <div class="row gap-2 align-items-start">
            <mat-form-field  appearance="outline" [floatLabel]="'always'">
                <mat-label>Small</mat-label>
                <input matInput [matDatepicker]="picker" placeholder="Date">
                <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
                <mat-datepicker #picker></mat-datepicker>
            </mat-form-field>

            <mat-form-field  appearance="fill" [floatLabel]="'always'">
                <mat-label>Small</mat-label>
                <input matInput [matDatepicker]="picker_2" placeholder="Date">
                <mat-datepicker-toggle matIconSuffix [for]="picker_2"></mat-datepicker-toggle>
                <mat-datepicker #picker_2></mat-datepicker>
            </mat-form-field>

            <mat-form-field  standard [floatLabel]="'always'">
                <mat-label>Small</mat-label>
                <input matInput [matDatepicker]="picker_3" placeholder="Date">
                <mat-datepicker-toggle matIconSuffix [for]="picker_3"></mat-datepicker-toggle>
                <mat-datepicker #picker_3 ></mat-datepicker>
            </mat-form-field>
        </div>
        <br>
        <div class="row gap-2 align-items-start">
            <mat-form-field  appearance="outline" [floatLabel]="'always'">
                <mat-label>Small</mat-label>
                <input matInput [matDatepicker]="picker_4" placeholder="Date">
                <mat-datepicker-toggle matIconPrefix [for]="picker_4"></mat-datepicker-toggle>
                <mat-datepicker #picker_4></mat-datepicker>
            </mat-form-field>

            <mat-form-field  appearance="fill" [floatLabel]="'always'">
                <mat-label>Small</mat-label>
                <input matInput [matDatepicker]="picker_5" placeholder="Date">
                <mat-datepicker-toggle matIconPrefix [for]="picker_5"></mat-datepicker-toggle>
                <mat-datepicker #picker_5></mat-datepicker>
            </mat-form-field>

            <mat-form-field  standard [floatLabel]="'always'">
                <mat-label>Small</mat-label>
                <input matInput [matDatepicker]="picker_6" placeholder="Date">
                <mat-datepicker-toggle matIconPrefix [for]="picker_6"></mat-datepicker-toggle>
                <mat-datepicker #picker_6 ></mat-datepicker>
            </mat-form-field>
        </div>
        <br>
        <div class="row gap-2 align-items-start">
            <mat-form-field  appearance="outline" [floatLabel]="'always'">
                <mat-label>Small</mat-label>
                <input matInput [matDatepicker]="picker_7" placeholder="Date">
                <mat-datepicker-toggle matIconSuffix [for]="picker_7">
                <mat-icon matDatepickerToggleIcon>hourglass_empty</mat-icon>
                 </mat-datepicker-toggle>
                  <mat-datepicker #picker_7></mat-datepicker>
            </mat-form-field>
            <br>
            <mat-form-field  appearance="fill" [floatLabel]="'always'">
                <mat-label>Small</mat-label>
                <input matInput [matDatepicker]="picker_8" placeholder="Date">
                <mat-datepicker-toggle matIconSuffix [for]="picker_8">
                <mat-icon matDatepickerToggleIcon>hourglass_empty</mat-icon>
                 </mat-datepicker-toggle>
                  <mat-datepicker #picker_8></mat-datepicker>
            </mat-form-field>
            <br>
            <mat-form-field  standard [floatLabel]="'always'">
                <mat-label>Small</mat-label>
                <input matInput [matDatepicker]="picker_8" placeholder="Date">
                <mat-datepicker-toggle matIconSuffix [for]="picker_8">
                <mat-icon matDatepickerToggleIcon>hourglass_empty</mat-icon>
                 </mat-datepicker-toggle>
                  <mat-datepicker #picker_8></mat-datepicker>
            </mat-form-field>


        </div> 
      </div>
    `,
    }),

};
export const formfield_DatePicker_medium: Story = {
    name: 'formfield-date-Picker-medium',
    render: () => ({
        template: `
      <div class="mat-typography ">
        <div class="row gap-2 align-items-start">
            <mat-form-field  size="medium" appearance="outline" [floatLabel]="'always'">
                <mat-label>medium</mat-label>
                <input matInput [matDatepicker]="picker" placeholder="Date">
                <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
                <mat-datepicker #picker></mat-datepicker>
            </mat-form-field>

            <mat-form-field  size="medium" appearance="fill" [floatLabel]="'always'">
                <mat-label>medium</mat-label>
                <input matInput [matDatepicker]="picker_2" placeholder="Date">
                <mat-datepicker-toggle matIconSuffix [for]="picker_2"></mat-datepicker-toggle>
                <mat-datepicker #picker_2></mat-datepicker>
            </mat-form-field>

            <mat-form-field  size="medium" standard [floatLabel]="'always'">
                <mat-label>medium</mat-label>
                <input matInput [matDatepicker]="picker_3" placeholder="Date">
                <mat-datepicker-toggle matIconSuffix [for]="picker_3"></mat-datepicker-toggle>
                <mat-datepicker #picker_3 ></mat-datepicker>
            </mat-form-field>
        </div>
        <br>
        <div class="row gap-2 align-items-start">
            <mat-form-field  size="medium" appearance="outline" [floatLabel]="'always'">
                <mat-label>medium</mat-label>
                <input matInput [matDatepicker]="picker_4" placeholder="Date">
                <mat-datepicker-toggle matIconPrefix [for]="picker_4"></mat-datepicker-toggle>
                <mat-datepicker #picker_4></mat-datepicker>
            </mat-form-field>

            <mat-form-field  size="medium" appearance="fill" [floatLabel]="'always'">
                <mat-label>medium</mat-label>
                <input matInput [matDatepicker]="picker_5" placeholder="Date">
                <mat-datepicker-toggle matIconPrefix [for]="picker_5"></mat-datepicker-toggle>
                <mat-datepicker #picker_5></mat-datepicker>
            </mat-form-field>

            <mat-form-field  size="medium" standard [floatLabel]="'always'">
                <mat-label>medium</mat-label>
                <input matInput [matDatepicker]="picker_6" placeholder="Date">
                <mat-datepicker-toggle matIconPrefix [for]="picker_6"></mat-datepicker-toggle>
                <mat-datepicker #picker_6 ></mat-datepicker>
            </mat-form-field>
        </div>
        <br>
        <div class="row gap-2 align-items-start">
            <mat-form-field  size="medium" appearance="outline" [floatLabel]="'always'">
                <mat-label>medium</mat-label>
                <input matInput [matDatepicker]="picker_7" placeholder="Date">
                <mat-datepicker-toggle matIconSuffix [for]="picker_7">
                <mat-icon matDatepickerToggleIcon>hourglass_empty</mat-icon>
                 </mat-datepicker-toggle>
                  <mat-datepicker #picker_7></mat-datepicker>
            </mat-form-field>
            <br>
            <mat-form-field  size="medium" appearance="fill" [floatLabel]="'always'">
                <mat-label>medium</mat-label>
                <input matInput [matDatepicker]="picker_8" placeholder="Date">
                <mat-datepicker-toggle matIconSuffix [for]="picker_8">
                <mat-icon matDatepickerToggleIcon>hourglass_empty</mat-icon>
                 </mat-datepicker-toggle>
                  <mat-datepicker #picker_8></mat-datepicker>
            </mat-form-field>
            <br>
            <mat-form-field  size="medium" standard [floatLabel]="'always'">
                <mat-label>medium</mat-label>
                <input matInput [matDatepicker]="picker_8" placeholder="Date">
                <mat-datepicker-toggle matIconSuffix [for]="picker_8">
                <mat-icon matDatepickerToggleIcon>hourglass_empty</mat-icon>
                 </mat-datepicker-toggle>
                  <mat-datepicker #picker_8></mat-datepicker>
            </mat-form-field>


        </div> 
      </div>
    `,
    }),

};




