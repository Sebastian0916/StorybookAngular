import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls:['./page-header.component.scss']
})
export class PageHeaderComponent {
  
  @Input()fixed:Boolean = false;

  @ContentChild('linksSection',{static:true})linksSection!:TemplateRef<any>;
  @ContentChild('titleSection',{static:true})titleSection!:TemplateRef<any>;
  @ContentChild('actionsSection',{static:true})actionsSection!:TemplateRef<any>;
  @ContentChild('footerSection',{static:true})footerSection!:TemplateRef<any>;

}

