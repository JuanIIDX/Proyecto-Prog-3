import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './general/home/home.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';
import { GeneralModule } from './general/general.module';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/home'
  },

  {
    path:'**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  GeneralModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
