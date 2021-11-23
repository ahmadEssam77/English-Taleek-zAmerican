import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaleekComponent } from './taleek/taleek.component';
import { ZAmericanEnglishComponent } from './z-american-english/z-american-english.component';
import { HomeComponent } from './home/home.component';
import { TaleekAOneComponent } from './taleek-a-one/taleek-a-one.component';

@NgModule({
  declarations: [
    AppComponent,
    TaleekComponent,
    ZAmericanEnglishComponent,
    HomeComponent,
    TaleekAOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
