import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ImovelModule } from 'src/app/modules/imovel/imovel.module';
import { ImoveisDetailsComponent } from './imoveis-details/imoveis-details.component';
import { ReactiveFormsModule } from '@angular/forms';

const ownModules = [
  ImovelModule
]

const modules = [
  ReactiveFormsModule,
]

@NgModule({
  declarations: [
    HomeComponent,
    ImoveisDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ...ownModules,
    ...modules
  ]
})
export class HomeModule { }
