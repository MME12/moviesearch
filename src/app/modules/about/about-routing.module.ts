import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './containers/about.component';

const aboutRoutes: Routes = [
  { 
  	path: 'about', 
  	component: AboutComponent 
  },
  { 
  	path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes),
  ],
  exports: [RouterModule],
})
export class AboutRoutingModule { }
