import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyComponent } from './technology.component';
import { TechnologyRoutingModule } from './technology-routing.module';



@NgModule({
  declarations: [TechnologyComponent],
  imports: [
    CommonModule,
    TechnologyRoutingModule
  ]
})
export class TechnologyModule { }
