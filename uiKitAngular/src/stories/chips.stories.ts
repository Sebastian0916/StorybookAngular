import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AngularModule } from '@sinco/angular';

export default {
  title: 'Angular Material/chips',
  decorators: [
    moduleMetadata({
      imports: [AngularModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs']
} as Meta;
type Story = StoryObj;

export const chips: Story = {
  name: 'chips',
  render: () => ({
    template: `
      <div class="mat-typography ">
          <mat-chip >small</mat-chip>
          <mat-chip size="medium">medium</mat-chip>
          <br>
          <br>
          <mat-chip  highlighted color="primary">small</mat-chip>
          <mat-chip  highlighted color="primary" size="medium">medium</mat-chip>
          <br>
          <br>
          <mat-chip  highlighted color="accent">small</mat-chip>
          <mat-chip  highlighted color="accent" size="medium">medium</mat-chip>
          <br>
          <br>
          <mat-chip  highlighted color="warn">small</mat-chip>
          <mat-chip  highlighted color="warn" size="medium">medium</mat-chip>
          <br>
          <br>
          <mat-chip  disabled>small</mat-chip>
          <mat-chip  disabled size="medium">medium</mat-chip>
          
      </div>
    `,
  }),

};
  
export const chips_stroked: Story = {
  name: 'chips-stroked',
  render: () => ({
    template: `
          <mat-chip class="stroked" >small</mat-chip>
          <mat-chip class="stroked" size="medium">medium</mat-chip>
          <br>
          <br>
          <mat-chip class="stroked"  highlighted color="primary">small</mat-chip>
          <mat-chip class="stroked"  highlighted color="primary" size="medium">medium</mat-chip>
          <br>
          <br>
          <mat-chip class="stroked"  highlighted color="accent">small</mat-chip>
          <mat-chip class="stroked"  highlighted color="accent" size="medium">medium</mat-chip>
          <br>
          <br>
          <mat-chip class="stroked"  highlighted color="warn">small</mat-chip>
          <mat-chip class="stroked"  highlighted color="warn" size="medium">medium</mat-chip>
          <br>
          <br>
          <mat-chip class="stroked"  disabled>small</mat-chip>
          <mat-chip class="stroked"  disabled size="medium">medium</mat-chip>
    `,
  }),

};

export const chips_icons: Story = {
  name: 'chips-icons',
  render: () => ({
    template: `
      <div class="mat-typography ">
        <mat-chip>small<mat-icon matChipRemove>cancel</mat-icon></mat-chip>
        <mat-chip size="medium">medium<mat-icon matChipRemove >cancel</mat-icon></mat-chip>
        <br>
        <br>
        <mat-chip highlighted color="primary">small<mat-icon matChipRemove>cancel</mat-icon></mat-chip>
        <mat-chip highlighted color="primary" size="medium">medium<mat-icon matChipRemove >cancel</mat-icon></mat-chip>
        <br>        
        <br>
        <mat-chip highlighted color="accent">small<mat-icon matChipRemove>cancel</mat-icon></mat-chip>
        <mat-chip highlighted color="accent" size="medium">medium<mat-icon matChipRemove >cancel</mat-icon></mat-chip>
        <br>
        <br>
        <mat-chip highlighted color="warn">small<mat-icon matChipRemove>cancel</mat-icon></mat-chip>
        <mat-chip highlighted color="warn" size="medium">medium<mat-icon matChipRemove >cancel</mat-icon></mat-chip>
        <br>
        <br>
        <mat-chip disabled>small<mat-icon matChipRemove>cancel</mat-icon></mat-chip>
        <mat-chip disabled size="medium">medium<mat-icon matChipRemove >cancel</mat-icon></mat-chip>
      </div>
    `,
  }),

};
  

export const chips_stroked_icons: Story = {
  name: 'chips-stroked-icons',
  render: () => ({
    template: `
      <div class="mat-typography ">
        <mat-chip class="stroked">small<mat-icon matChipRemove>cancel</mat-icon></mat-chip>
        <mat-chip class="stroked" size="medium">medium<mat-icon matChipRemove >cancel</mat-icon></mat-chip>
        <br>
        <br>
        <mat-chip class="stroked" highlighted color="primary">small<mat-icon matChipRemove>cancel</mat-icon></mat-chip>
        <mat-chip class="stroked" highlighted color="primary" size="medium">medium<mat-icon matChipRemove >cancel</mat-icon></mat-chip>
        <br>        
        <br>
        <mat-chip class="stroked" highlighted color="accent">small<mat-icon matChipRemove>cancel</mat-icon></mat-chip>
        <mat-chip class="stroked" highlighted color="accent" size="medium">medium<mat-icon matChipRemove >cancel</mat-icon></mat-chip>
        <br>
        <br>
        <mat-chip class="stroked" highlighted color="warn">small<mat-icon matChipRemove>cancel</mat-icon></mat-chip>
        <mat-chip class="stroked" highlighted color="warn" size="medium">medium<mat-icon matChipRemove >cancel</mat-icon></mat-chip>
        <br>
        <br>
        <mat-chip class="stroked" disabled>small<mat-icon matChipRemove>cancel</mat-icon></mat-chip>
        <mat-chip class="stroked" disabled size="medium">medium<mat-icon matChipRemove >cancel</mat-icon></mat-chip>
      </div>
    `,
  }),

};

export const chips_options: Story = {
  name: 'chips-options',
  render: () => ({
    template: `
      <div class="mat-typography ">
        <mat-chip-option selected>Two fish</mat-chip-option>
        <mat-chip-option selected size="medium">Two fish</mat-chip-option>
        <br>
        <br>
        <mat-chip-option selected color="accent">Two fish</mat-chip-option>
        <mat-chip-option selected color="accent" size="medium">Two fish</mat-chip-option>
        <br>
        <br>
        <mat-chip-option selected color="warn">Two fish</mat-chip-option>
        <mat-chip-option selected color="warn" size="medium">Two fish </mat-chip-option>
        <br>
        <br>
        <mat-chip-option selected disabled>Two fish</mat-chip-option>
        <mat-chip-option selected disabled size="medium">Two fish</mat-chip-option>
      </div>
    `,
  }),

};


export const chips_options_icons: Story = {
  name: 'chips-options-icons',
  render: () => ({
    template: `
      <div class="mat-typography ">
        <mat-chip-option selected>small<mat-icon matChipRemove>cancel</mat-icon></mat-chip-option>
        <mat-chip-option selected size="medium">medium  <mat-icon matChipRemove>cancel</mat-icon></mat-chip-option>
        <br>
        <br>
        <mat-chip-option selected color="accent" >small  <mat-icon matChipRemove>cancel</mat-icon></mat-chip-option>
        <mat-chip-option selected color="accent" size="medium">medium  <mat-icon matChipRemove>cancel</mat-icon></mat-chip-option>
        <br>
        <br>
        <mat-chip-option selected color="warn" >small  <mat-icon matChipRemove>cancel</mat-icon></mat-chip-option>
        <mat-chip-option selected color="warn" size="medium">medium  <mat-icon matChipRemove>cancel</mat-icon></mat-chip-option>
        <br>
        <br>
        <mat-chip-option selected disabled >small  <mat-icon matChipRemove>cancel</mat-icon></mat-chip-option>
        <mat-chip-option selected disabled size="medium">medium  <mat-icon matChipRemove>cancel</mat-icon></mat-chip-option>
      </div>
    `,
  }),

};
  
  
