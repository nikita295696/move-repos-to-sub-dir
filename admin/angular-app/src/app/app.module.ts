import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UslugiComponent } from './uslugi/uslugi.component';
import { ContactComponent } from './contact/contact.component';
import { FrontComponent } from './front/front.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    HeaderComponent,
    SidebarComponent,
    PortfolioComponent,
    UslugiComponent,
    ContactComponent,
    FrontComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
