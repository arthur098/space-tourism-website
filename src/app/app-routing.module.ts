import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationModule } from '../pages/destination/destination.module';
import { HomeModule } from '../pages/home/home.module';
import { CrewModule } from '../pages/crew/crew.module';
import { TechnologyModule } from '../pages/technology/technology.module';


const routes: Routes = [
  { path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => HomeModule },
      { path: 'destination', loadChildren: () => DestinationModule },
      { path: 'crew', loadChildren: () => CrewModule },
      { path: 'technology', loadChildren: () => TechnologyModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
