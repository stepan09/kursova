import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StadiumRoutingModule } from './stadium-routing.module';
import { StadiumListComponent } from './stadium-list/stadium-list.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    StadiumRoutingModule,
    FormsModule,
  ],
  declarations: [StadiumListComponent]
})
export class StadiumModule { }
