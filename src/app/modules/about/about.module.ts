import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';

// containers
import * as fromContainers from './containers';

// components
// import * as fromComponents from './components';

 // services
// import * as fromServices from './services';

@NgModule({
  declarations: [
    ...fromContainers.containers,
  ],
  imports: [
   	CommonModule,
    AboutRoutingModule,
  ],
})
export class AboutModule {
 
}
