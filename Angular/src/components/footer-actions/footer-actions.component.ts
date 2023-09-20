import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-footer-actions',
  templateUrl: './footer-actions.component.html',
  styleUrls: ['./footer-actions.component.scss']
})
export class FooterActionsComponent {
  
  @ContentChild('leftSection',{static:true})leftSection!:TemplateRef<any>;
  @ContentChild('rightSection',{static:true})rightSection!:TemplateRef<any>;

}
