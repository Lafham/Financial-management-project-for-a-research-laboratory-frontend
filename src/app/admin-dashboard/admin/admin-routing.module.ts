import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from '../users/users.component';
import { CrudMembreComponent } from '../crud-membre/crud-membre.component';
import { ResponsableComponent } from '../responsable/responsable.component';
import { DotationProjetComponent } from '../dotation-projet/dotation-projet.component';
import { DotationUCARechComponent } from '../dotation-uca-rech/dotation-uca-rech.component';
import { EtablissementComponent } from '../etablissement/etablissement.component';
import { TypeBesoinComponent } from '../type-besoin/type-besoin.component';
import { LaboratoireComponent } from '../laboratoire/laboratoire.component';
import { AdminGuardService } from '../../admin-gard-service.service';
import { ExpBesoinComponent } from '../exp-besoin/exp-besoin.component';
import { DotationMembreComponent } from '../dotation-membre/dotation-membre.component';
import { ProjetComponent } from '../projet/projet.component';


const routes: Routes = [
  
  {path : 'admin-dashboard', component: AdminComponent, canActivate:[AdminGuardService]},
  {path : 'utilisateur', component:UsersComponent, canActivate:[AdminGuardService]},
  {path : 'membre', component : CrudMembreComponent, canActivate:[AdminGuardService]},
  {path : 'responsable', component : ResponsableComponent, canActivate:[AdminGuardService]},
  {path : 'dotationprojet', component : DotationProjetComponent, canActivate:[AdminGuardService]},
  {path : 'dotationucarech', component : DotationUCARechComponent, canActivate:[AdminGuardService]},
  {path : 'etablissement', component : EtablissementComponent, canActivate:[AdminGuardService]},
  {path : 'expbesoin', component : ExpBesoinComponent, canActivate:[AdminGuardService]},
  {path : 'laboratoire', component : LaboratoireComponent, canActivate:[AdminGuardService]},
  {path : 'typebesoin', component : TypeBesoinComponent, canActivate:[AdminGuardService]},
  {path : 'projet', component : ProjetComponent, canActivate:[AdminGuardService]},
  {path : 'dotationmembre', component : DotationMembreComponent, canActivate:[AdminGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }