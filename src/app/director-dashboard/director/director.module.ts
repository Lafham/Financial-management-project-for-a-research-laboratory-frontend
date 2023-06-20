import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DirectorRoutingModule } from './director-routing.module';
import { DirectorComponent } from './director.component';
import { ProjetDComponent } from '../projet-d/projet-d.component';
import { DotationMembreDComponent } from '../dotation-membre-d/dotation-membre-d.component';
import { DotationProjetDComponent } from '../dotation-projet-d/dotation-projet-d.component';
import { DotationUcaRechDComponent } from '../dotation-uca-rech-d/dotation-uca-rech-d.component';
import { ExpBesoinDComponent } from '../exp-besoin-d/exp-besoin-d.component';
import { MembreDComponent } from '../membre-d/membre-d.component';








@NgModule({
  declarations: [
    MembreDComponent,
    ExpBesoinDComponent,
    DotationUcaRechDComponent,
    DotationProjetDComponent,
    DotationMembreDComponent,
    ProjetDComponent,
    DirectorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DirectorRoutingModule,
    RouterModule
  ],

})
export class DirectorModule { }
