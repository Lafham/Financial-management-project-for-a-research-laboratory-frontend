import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpBesoinMComponent } from '../exp-besoin-m/exp-besoin-m.component';
import { MembreComponent } from './membre.component';
import { MembreGardServiceService } from 'src/app/membre-gard-service.service';

const routes: Routes = [
  {path : 'expbesoinM', component : ExpBesoinMComponent, canActivate:[MembreGardServiceService]},
  {path: 'membre-dashboard', component: MembreComponent, canActivate:[MembreGardServiceService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembreRoutingModule { }
