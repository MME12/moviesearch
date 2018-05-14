import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './modules/menu/menu.component';
import { PageNotFoundComponent } from './modules/common/not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MenuComponent,
    outlet: 'menu'
  },
  { 
  	path: '**',
  	component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
