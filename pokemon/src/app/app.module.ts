import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { PokemonCrudComponent } from './pokemon-crud/pokemon-crud.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {PokemonDataService} from "./data/PokemonDataService";
import {config} from "rxjs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    PokemonCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(PokemonDataService,{passThruUnknownUrl : true}
    ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
