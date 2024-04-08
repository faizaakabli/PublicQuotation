import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from '../env/env.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomeComponent } from './home/home.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
    ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirestoreModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot([]),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    HomeComponent,
  ],

  providers: [], 
  bootstrap: [AppComponent]

})
export class AppModule { }
