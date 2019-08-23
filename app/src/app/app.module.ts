import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YearSelectorComponent } from './year-selector/year-selector.component';
import { DecadePipe } from './decade.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    YearSelectorComponent,
    DecadePipe
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
