import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ImovelModule } from 'src/app/modules/imovel/imovel.module';

const ownModules = [
  ImovelModule
]

const materialModules = [
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ...ownModules,
    // ...materialModules
  ]
})
export class HomeModule { }
