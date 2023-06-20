import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DotationMembreComponent } from '../dotation-membre/dotation-membre.component';
import { DotationProjetComponent } from '../dotation-projet/dotation-projet.component';
import { DotationUCARechComponent } from '../dotation-uca-rech/dotation-uca-rech.component';
import { TypeBesoinComponent } from '../type-besoin/type-besoin.component';
import { LaboratoireComponent } from '../laboratoire/laboratoire.component';
import { ResponsableComponent } from '../responsable/responsable.component';
import { CrudMembreComponent } from '../crud-membre/crud-membre.component';
import { EtablissementComponent } from '../etablissement/etablissement.component';
import { UsersComponent } from '../users/users.component';
import { ExpBesoinComponent } from '../exp-besoin/exp-besoin.component';
import { ProjetComponent } from '../projet/projet.component';






@NgModule({
  declarations: [
    UsersComponent,
    EtablissementComponent,
    CrudMembreComponent,
    ExpBesoinComponent,
    ResponsableComponent,
    LaboratoireComponent,
    TypeBesoinComponent,
    DotationUCARechComponent,
    DotationProjetComponent,
    DotationMembreComponent,
    ProjetComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
