import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/Authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private service: AuthentificationService, private router: Router) {}

  register() {
    this.service.register(this.email, this.password).then(() => {
      this.router.navigate(['/login']); // Redirection vers la page de connexion après l'inscription réussie
    })
    .catch(error => {
      console.log('Error:', error);
    });
  }
}
