import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AdminModule } from './admin-dashboard/admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminRoutingModule } from './admin-dashboard/admin/admin-routing.module';
import { DirectorModule } from './director-dashboard/director/director.module';
import { DirectorRoutingModule } from './director-dashboard/director/director-routing.module';
import { MembreRoutingModule } from './membre-dashboard/membre/membre-routing.module';
import { MembreModule } from './membre-dashboard/membre/membre.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    DirectorRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    DirectorModule,
    MembreModule,
    MembreRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
