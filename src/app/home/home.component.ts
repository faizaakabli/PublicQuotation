import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  logout() {
    this.afAuth.signOut().then(() => {
      console.log('Déconnexion réussie !');
      this.router.navigate(['/login']); // Redirection vers la page de connexion après la déconnexion
    }).catch(error => {
      console.log('Erreur lors de la déconnexion :', error);
    });
  }

}
