import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './feature/components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { FirebaseComponent } from './feature/components/firebase/firebase.component'
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './feature/components/angular/parent/parent.component';
import { ChildComponent } from './feature/components/angular/child/child.component';
import { PwaComponent } from './feature/components/pwa/pwa.component';
import { ListDirective } from './feature/components/angular/list.directive';
import { JavascriptComponent } from './feature/components/javascript/javascript.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { rootReducer } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // NavbarComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    PwaComponent,
    ListDirective,
    JavascriptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
