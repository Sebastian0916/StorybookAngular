import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { PageHeaderComponent } from 'src/components/page-header/page-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
  title: 'Angular Material/Page-header',
  component:PageHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule,MatIconModule,MatTabsModule,BrowserAnimationsModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes:{
    fixed:{
      description:'la propiedad `fixed` agregara una clase al contenedor del componente el cual modificara su posicion, los valores de posicion tanto en el eje `x` como en el `y` no se definieron en caso de que existan otros elementos con la misma posicion.',
      table: {
        defaultValue: { summary: 'static' }
      }
    }
  }

} as Meta<PageHeaderComponent>;

type Story = StoryObj<PageHeaderComponent>

export const Fixed_position: Story = {
    name: "Fixed position", 
    parameters:{
      docs:{
        story: {
          inline: false,
          iframeHeight: 300,
        }, 
      },
      layout:'fullscren',
    },
    render:() => ({   
      styles:[
        `
          ul{
            list-style: none;	
            padding:0;
          }
          li {
            display: inline;
          }
          li:not(:first-of-type)::before {
            content: "/";
            margin-inline: 4px;
          }
          .container-scroll{
            padding-top:120px;
            padding-inline: 24px;
            text-align: justify;
          }
          
        `
      ],
      template: `
        <app-page-header [fixed]="true">
              <ng-template #titleSection>
                <div class="row gap-1 align-items-center">
                    <button mat-icon-button color="primary">
                        <mat-icon>arrow_back</mat-icon>
                    </button>
                    <div class="column">
                        <span class="mat-h4 color-text-primary">Title</span>
                        <span class="mat-caption color-text-secondary">Subtitle</span>
                    </div>
                  </div>
              </ng-template>

              <ng-template #actionsSection>
                  <button mat-stroked-button color="primary" >button</button>
                  <button mat-stroked-button color="primary" >button</button>
                  <button mat-flat-button color="primary" >button</button>
                  <button mat-icon-button>
                      <mat-icon>more_horiz</mat-icon>
                  </button>
              </ng-template>

              <ng-template #linksSection>
                <nav>
                  <ul>
                    <li class="mat-caption"><a class="color-text-primary" href="#">Link 1</a></li>
                    <li class="mat-caption"><a class="color-text-primary" href="#">Link 2</a></li>
                    <li class="mat-caption"><a class="color-text-primary" href="#">Link 3</a></li>
                    <li class="mat-caption"><a class="color-text-primary" href="#">Link 4</a></li>
                    <li class="mat-caption"><a class="color-text-primary" href="#">Link 5</a></li>
                    <li class="mat-caption"><a class="color-text-primary" href="#">Link 6</a></li>
                  </ul>
                </nav>
              </ng-template>

              <ng-template #footerSection>
                <mat-tab-group>
                  <mat-tab label="Tab" /> 
                  <mat-tab label="Tab" /> 
                  <mat-tab label="Tab" /> 
                </mat-tab-group>
              </ng-template>

        </app-page-header>
           
        <div class="container-scroll">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, corrupti ipsum quisquam delectus iusto culpa consequuntur saepe voluptatibus quo expedita, perspiciatis, perferendis debitis temporibus. Officia quibusdam aliquid delectus? Sapiente dolorum iure accusamus provident quod, voluptatibus delectus nam vero. Molestias itaque eveniet ab necessitatibus! Sapiente quia esse vitae! Possimus quia, aliquam sed vel cum rem suscipit dolorum reiciendis voluptatum. Voluptas recusandae eum mollitia at ut, nam perferendis, quos veniam quis neque repudiandae nisi maxime similique voluptatem laudantium nulla beatae molestias harum dolorem tenetur deserunt dolorum? Voluptatum vitae delectus in debitis, eum ipsa excepturi animi et accusantium nihil velit quis ea sint consequuntur veniam magni maxime totam voluptates. Porro, nulla natus et earum accusamus nobis, veniam aut in enim temporibus, error quisquam sit incidunt culpa repellendus impedit nam cupiditate deleniti magnam nesciunt? Minima similique iure in quis dolore exercitationem adipisci voluptas laboriosam itaque quisquam velit vitae inventore, reiciendis ab asperiores nam labore a ut culpa ad accusamus consequuntur? Tenetur, incidunt voluptate reiciendis atque possimus velit sapiente hic expedita illo similique quaerat, sint ratione. Eum cumque iusto accusamus nobis possimus aliquam consequuntur, voluptatem magni consectetur at a animi. Culpa autem magnam eius aliquam, molestias hic explicabo et incidunt, rerum exercitationem ducimus alias illo. Exercitationem vitae, quae ipsa tempora quod placeat perspiciatis doloribus omnis ipsum maiores ad, corrupti hic iste laudantium. Voluptates asperiores adipisci soluta. Minima eos possimus nobis cum voluptatibus, ab dolore quod nostrum libero laboriosam perspiciatis ad rerum inventore minus assumenda nesciunt delectus sapiente culpa veniam labore quae doloribus eligendi hic sit? Tenetur itaque debitis vel, aliquam corrupti maxime quaerat nisi est corporis voluptatum, eaque adipisci consectetur a. Non rem officia explicabo odit, deleniti, consequatur, ducimus quo sint labore sequi ullam possimus porro voluptates iure. Tenetur nulla, officiis facilis omnis quidem cum aperiam ea ullam sunt, illo, rem alias ut placeat. Officia eos temporibus eaque placeat laudantium cumque cupiditate, ullam nisi, voluptatibus tempore quibusdam. Nobis inventore consequuntur ea corporis nemo labore eligendi. Iusto sequi dolore, id pariatur animi velit commodi aliquam, amet molestiae repudiandae incidunt repellendus praesentium iure fugit similique rerum quo repellat, dolorem aut esse minus! Nihil debitis harum ipsa, esse eos eum veritatis vero facere perspiciatis similique fuga eaque delectus cum nostrum vitae, repudiandae natus iste error officiis exercitationem aliquam dolor? Consequuntur, nobis commodi soluta nostrum sunt labore nihil illum illo obcaecati aperiam sit odio in possimus voluptatem quasi tenetur ullam sequi, adipisci amet molestias explicabo et officia. Beatae sunt dicta saepe vitae explicabo perferendis dolorum ipsam quos placeat, eos eaque non ad deleniti doloribus fuga labore voluptates fugiat dolor? Accusantium sed asperiores laborum atque labore consequuntur vero, officia eveniet consequatur ratione porro quas suscipit odit sequi, velit voluptas tenetur rem, architecto harum fugiat eos. Accusamus, rem? Repellendus necessitatibus iure eius? Ullam, ut veritatis. Impedit magni veritatis dolorem in unde porro illum iusto voluptatibus excepturi adipisci nostrum et, enim possimus id ea obcaecati temporibus maxime assumenda inventore distinctio nam quos deleniti! Atque dicta fuga exercitationem dolores rerum! Dolor voluptate repellat officia earum optio inventore maiores ut eos suscipit, assumenda provident, rem illum accusantium itaque incidunt, iure vel nulla distinctio dolores explicabo minima? Quia molestias, fugiat placeat eligendi autem ea reprehenderit labore aliquid repellat voluptate illum? Expedita possimus est hic dolorem. Error, omnis? Magni expedita iusto quod tempore unde, ex illo molestias fugiat quasi dolorum. Autem possimus dignissimos sapiente nam unde quam sunt, tempore sint inventore repudiandae necessitatibus rerum esse! Ex quisquam suscipit voluptates repellat hic cum quidem laborum dolore velit veniam voluptas, aspernatur modi consequatur, repellendus quibusdam possimus. Repellendus architecto, eveniet harum consequatur dolor dolorem possimus blanditiis illo totam doloribus accusamus inventore eaque consectetur reiciendis molestiae natus modi veniam aut numquam. Placeat, architecto veritatis dignissimos ut fugiat dolore cumque id commodi, facere beatae consequatur incidunt fugit rerum laudantium cum qui libero quo maxime. Amet accusamus nostrum esse expedita deleniti commodi neque possimus perferendis rem deserunt fuga molestias, nam voluptates quasi impedit doloribus labore cumque, harum delectus ab officiis fugit incidunt quas. Aperiam, officiis illo impedit animi natus ipsa nostrum accusantium quibusdam blanditiis officia, deleniti consequuntur vero quis temporibus cum consectetur ipsum corporis eaque cumque, quidem odio iste. Provident molestiae ea mollitia officiis omnis dicta? Perferendis ad minima dolore iure natus maxime pariatur ab atque, quos suscipit voluptatibus autem, cupiditate illo eius error harum esse. Est accusantium velit quam, debitis delectus quos unde aspernatur aliquid sint cumque soluta repellat alias repellendus deserunt facere autem ut minima vero assumenda dolorum repudiandae voluptate atque? Nam aliquid odio odit perspiciatis? Repellat possimus illum quod laudantium numquam? Consectetur corporis sequi a excepturi atque! Minus, dolores, suscipit molestias aliquam ex obcaecati hic laudantium repellendus laborum debitis inventore! Iste earum debitis perferendis nisi animi totam placeat in nobis excepturi exercitationem! Maxime dicta voluptatibus, hic in odit magni commodi obcaecati voluptates quod sequi libero minima nulla harum mollitia, veritatis enim corporis cum quasi sint sunt aliquid quam? Maiores cupiditate, quos accusantium facilis officia sapiente, doloremque quidem ab consequatur in modi. Hic blanditiis ut suscipit odit nihil, fugit ex praesentium labore quas est fuga necessitatibus voluptatem? Perferendis voluptatibus consequatur praesentium quia nihil! Est velit ex quasi illum sed quisquam dolorem odio autem ipsam quidem cumque quod quas corporis eos beatae, voluptatum at magnam corrupti voluptatem cum nesciunt. Placeat in accusamus incidunt eveniet perferendis cupiditate rerum quod mollitia voluptates sed adipisci beatae nostrum obcaecati, magnam enim quia, eius earum ex? Quia reprehenderit unde tempore quisquam tenetur est consequuntur autem molestiae vel? Maiores iusto minus nulla tempore quod laboriosam tempora qui.</p>
        </div> 
      `,
    })
   
}

export const Title_Section: Story = {
  name: "Title Section",
  render: () => ({
    template: `
        <app-page-header>
            <ng-template #titleSection>
              <div class="row gap-1 align-items-center">
                  <button mat-icon-button color="primary">
                      <mat-icon>arrow_back</mat-icon>
                  </button>
                  <div class="column">
                      <span class="mat-h4 color-text-primary">Title</span>
                      <span class="mat-caption color-text-secondary">Subtitle</span>
                  </div>
                </div>
            </ng-template>
        </app-page-header>
    `
  })
}
  
export const Actions_Section: Story = {
    name: "Actions Section",
    render: () => ({
      template: `
          <app-page-header>
              <ng-template #actionsSection>
                  <button mat-stroked-button color="primary" >button</button>
                  <button mat-stroked-button color="primary" >button</button>
                  <button mat-flat-button color="primary" >button</button>
                  <button mat-icon-button>
                      <mat-icon>more_horiz</mat-icon>
                  </button>
              </ng-template>
          </app-page-header>
      `
    })
}

export const Links_Section: Story = {
  name: "Links Section",
  render: () => ({
    styles:[
      `
        ul{
          list-style: none;	
          padding:0;
        }
        li {
          display: inline;
        }
        li:not(:first-of-type)::before {
          content: "/";
          margin-inline: 4px;
        }
      `
    ],
    template: `
        <app-page-header>
            <ng-template #linksSection>
              <nav >
                <ul>
                  <li class="mat-caption"><a class="color-text-primary" href="#">Link 1</a></li>
                  <li class="mat-caption"><a class="color-text-primary" href="#">Link 2</a></li>
                  <li class="mat-caption"><a class="color-text-primary" href="#">Link 3</a></li>
                  <li class="mat-caption"><a class="color-text-primary" href="#">Link 4</a></li>
                  <li class="mat-caption"><a class="color-text-primary" href="#">Link 5</a></li>
                  <li class="mat-caption"><a class="color-text-primary" href="#">Link 6</a></li>
                </ul>
              </nav>
            </ng-template>
        </app-page-header>
    `
  })
}

export const Footer_Section: Story = {
    name: "Footer Section",
    render: () => ({
      template: `
          <app-page-header>
              <ng-template #footerSection>
                <mat-tab-group>
                  <mat-tab label="Tab" /> 
                  <mat-tab label="Tab" /> 
                  <mat-tab label="Tab" /> 
                </mat-tab-group>
              </ng-template>
          </app-page-header>
      `
    })
}
