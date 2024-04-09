import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../env/env.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Createquotation } from './create-quotation/create-quotation.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        Createquotation,
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
    provideFirebaseApp(() => initializeApp({"projectId":"cotacar-48c0e","appId":"1:984201144466:web:2083f8ade292ddd07b5e4b","databaseURL":"https://cotacar-48c0e-default-rtdb.firebaseio.com","storageBucket":"cotacar-48c0e.appspot.com","apiKey":"AIzaSyDdxaFugJsYXmQi_1rly_Eyg-vPec7ch2E","authDomain":"cotacar-48c0e.firebaseapp.com","messagingSenderId":"984201144466","measurementId":"G-R50Y3KE7QL"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],

  providers: [], 
  bootstrap: [AppComponent]

})
export class AppModule { }
