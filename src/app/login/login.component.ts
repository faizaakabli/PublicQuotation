import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

login() {
  console.log('Trying to log in...');

  this.afAuth.signInWithEmailAndPassword(this.email, this.password)
    .then(() => {
      // Connexion réussie, redirigez l'utilisateur vers la page d'accueil
      console.log('Login successful!');
      this.router.navigate(['/home']); // Naviguer vers la page d'accueil
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

}
