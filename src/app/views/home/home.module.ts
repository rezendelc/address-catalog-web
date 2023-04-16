import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PropertyModule } from 'src/app/modules/property/property.module';

const ownModules = [
  PropertyModule,
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
