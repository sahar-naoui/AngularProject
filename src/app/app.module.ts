import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/sharedIndex';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent} from "./pages/login/login.component";
import {RouterModule} from "@angular/router";
import {RegistreComponent} from "./pages/registre/registre.component";


@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule, BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, LoginComponent, RegistreComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
