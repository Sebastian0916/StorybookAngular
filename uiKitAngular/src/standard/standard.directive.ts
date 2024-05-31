import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'mat-form-field [standard]'
})
export class StandardDirective {

  constructor(private el: ElementRef<HTMLElement>) { 
    this.el.nativeElement.classList.add('standard')

    }    
}
