import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {UslugiComponent} from "./uslugi/uslugi.component";
import {ContactComponent} from "./contact/contact.component";
import {FrontComponent} from "./front/front.component";
import {ProjectComponent} from "./project/project.component";

const routes: Routes = [
    {path: '', component: FrontComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'uslugi', component: UslugiComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'project/:id', component: ProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
