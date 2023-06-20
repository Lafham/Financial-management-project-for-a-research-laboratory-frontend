import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorComponent } from './director.component';
import { DirectorGardServiceService } from '../../director-gard-service.service';
import { MembreDComponent } from '../membre-d/membre-d.component';
import { DotationMembreDComponent } from '../dotation-membre-d/dotation-membre-d.component';
import { DotationUcaRechDComponent } from '../dotation-uca-rech-d/dotation-uca-rech-d.component';
import { ExpBesoinDComponent } from '../exp-besoin-d/exp-besoin-d.component';
import { ProjetDComponent } from '../projet-d/projet-d.component';


const routes: Routes = [
  
  {path : 'director-dashboard', component: DirectorComponent, canActivate:[DirectorGardServiceService]},
  {path : 'membreD', component : MembreDComponent, canActivate:[DirectorGardServiceService]},
  {path : 'dotationprojetD', component : DotationMembreDComponent, canActivate:[DirectorGardServiceService]},
  {path : 'dotationucarechD', component : DotationUcaRechDComponent, canActivate:[DirectorGardServiceService]},
  {path : 'expbesoinD', component : ExpBesoinDComponent, canActivate:[DirectorGardServiceService]},
  {path : 'dotationmembreD', component : DotationMembreDComponent, canActivate:[DirectorGardServiceService]},
  {path : 'projetD', component : ProjetDComponent, canActivate:[DirectorGardServiceService]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorRoutingModule { }
