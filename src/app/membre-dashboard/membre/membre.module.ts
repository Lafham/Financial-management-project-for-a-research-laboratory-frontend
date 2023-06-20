import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembreRoutingModule } from './membre-routing.module';
import { MembreComponent } from './membre.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExpBesoinMComponent } from '../exp-besoin-m/exp-besoin-m.component';


@NgModule({
  declarations: [
    MembreComponent,
    ExpBesoinMComponent
  ],
  imports: [
    CommonModule,
    MembreRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class MembreModule { }
