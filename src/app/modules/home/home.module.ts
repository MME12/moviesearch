import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SMMaterialModule } from '@app/modules/material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';

// containers
import * as fromContainers from './containers';

// components
import * as fromComponents from './components';

// services
import * as fromServices from './services';

@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
  ],
  imports: [
  	SMMaterialModule,
    HttpClientModule,
   	CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
  ],
  providers: [...fromServices.services]
})
export class HomeModule {
 
}
