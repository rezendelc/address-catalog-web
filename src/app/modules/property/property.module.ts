import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './components/property-card/property-card.component';

@NgModule({
  declarations: [
    PropertyCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PropertyCardComponent
  ]
})
export class PropertyModule { }
