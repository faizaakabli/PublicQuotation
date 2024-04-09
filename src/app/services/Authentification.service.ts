import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private afAuth: AngularFireAuth) {}

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
