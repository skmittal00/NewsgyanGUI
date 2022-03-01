import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PplheaderComponent } from './headfoot/pplheader/pplheader.component';
import { PplfooterComponent } from './headfoot/pplfooter/pplfooter.component';


@NgModule({
  declarations: [PplheaderComponent, PplfooterComponent],
  imports: [
    CommonModule
  ]
})
export class PublicviewModule { }
