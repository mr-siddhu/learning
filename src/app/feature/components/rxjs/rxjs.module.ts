import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { CoreModule } from '../../../core/core.module';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    RxjsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatCardModule,
    RxjsRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
})
export class RxjsModule { }
