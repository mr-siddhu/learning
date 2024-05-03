import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { RegistrationComponent } from '../application-components/registration/registration.component';
import { LoginComponent } from '../application-components/login/login.component';
import { UpdateUserDetailsComponent } from '../application-components/update-user-details/update-user-details.component';
import { DashboardComponent } from '../application-components/dashboard/dashboard.component';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    UpdateUserDetailsComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    StoreModule,
    ReactiveFormsModule,
    ShoppingRoutingModule,
    MatToolbarModule
  ]
})
export class ShoppingModule { }
