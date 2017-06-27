import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MarkdownComponent, MarkdownService } from 'angular2-markdown';

import { AppComponent }  from './components/app.component';
import { HeaderComponent }  from './components/panels/header/header.component';
import { ContentComponent }  from './components/panels/content/content.component';
import { LeftMenuComponent } from './components/panels/content/left.menu.component';
import { TableContentComponent } from './components/panels/content/table.content.component';
import { FooterComponent }  from './components/panels/footer/footer.component';
import { StructureConfigurationService } from './services/configuration/structureConfigurationService';


@NgModule({
  imports:      [ 
                    BrowserModule, 
                    HttpModule
                    
                ],
  declarations: [ 
  					AppComponent,
                    HeaderComponent,
                    MarkdownComponent,
                    ContentComponent,
                    LeftMenuComponent,
                    TableContentComponent,
                    FooterComponent
                    
  				],
  providers: [ StructureConfigurationService, MarkdownService  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
