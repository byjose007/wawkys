import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'registro' },
  { path: 'registro', component: RegistroComponent },
  { path: 'listar', component: ListarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
