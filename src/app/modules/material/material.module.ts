import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';

import {
  MatChipsModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
} from '@angular/material';

const materialModules = [
  MatChipsModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: [ CdkTableModule,
  ...materialModules],
  exports: [
    CdkTableModule,
    ...materialModules
  ]
})
export class SMMaterialModule {}
