import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private registerUrl = 'http://localhost:4000/api/users/register';
  private loginUrl = 'http://localhost:4000/api/users/login'; // Ajoutez l'URL pour la connexion

  constructor(private http: HttpClient, private afAuth: AngularFireAuth, private router: Router) {}

  register(email: string, password: string) : Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
  }

  // login(credentials: { email: string; password: string }) {
  //   return this.http.post(this.loginUrl, credentials, { withCredentials: true });
  // }

  login(email: string, password: string ) : Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }
}
