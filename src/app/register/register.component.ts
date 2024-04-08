import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  register() {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        console.log('Registration successful!');
        this.router.navigate(['/login']); // Redirection vers la page de connexion après l'inscription réussie
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
}
