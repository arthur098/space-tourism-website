import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationModule } from '../pages/destination/destination.module';
import { HomeModule } from '../pages/home/home.module';


const routes: Routes = [
  { path: '',
    children: [
      { path: 'home', loadChildren: () => HomeModule },
      { path: 'destination', loadChildren: () => DestinationModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
