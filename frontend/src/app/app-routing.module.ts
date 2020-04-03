import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { InfosComponent } from './components/infos/infos.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {
    // à la racine du site, rediriger vers home
    path:'',
    pathMatch:'full',
    redirectTo: 'home'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  // le composant Infos est le parent des composants
  // Agenda, Contact, Map (/infos/agenda, etc...)
  {
    path:'infos',
    component: InfosComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'agenda'
      },
      {
        path:'agenda',
        component: AgendaComponent
      },
      {
        path:'contact',
        component: ContactComponent
      },
      {
        path:'map',
        component: MapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
