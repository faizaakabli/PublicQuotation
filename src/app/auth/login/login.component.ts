import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private service: AngularFireAuth) {}

  login() {
    this.service
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        // Connexion réussie, redirigez l'utilisateur vers la page d'accueil
        this.router.navigate(['/home']); // Naviguer vers la page d'accueil
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
}
