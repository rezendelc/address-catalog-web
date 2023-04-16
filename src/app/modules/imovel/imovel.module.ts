import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImovelCardComponent } from './components/imovel-card/imovel-card.component';

@NgModule({
  declarations: [
    ImovelCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImovelCardComponent
  ]
})
export class ImovelModule { }
