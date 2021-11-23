import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaleekAOneComponent } from './taleek-a-one/taleek-a-one.component';
import { TaleekComponent } from './taleek/taleek.component';
import { ZAmericanEnglishComponent } from './z-american-english/z-american-english.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: 'taleek', component: TaleekComponent},
  {path: 'zAmerican', component: ZAmericanEnglishComponent},
  {path: 'taleekA1', component: TaleekAOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
