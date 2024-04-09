import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthentificationService } from '../services/Authentification.service';


@Component({
  selector: 'app-home',
  templateUrl: './create-quotation.component.html',
  styleUrl: './create-quotation.component.scss',
})
export class Createquotation {
  message: string = '';
  password: string = '';
  email: string = '';
  selectedFile: File | null = null;

  constructor(
    private router: Router,
    private storage: AngularFireStorage,
    private firestore: AngularFirestore,
    private authService: AuthentificationService
  ) {}



  uploadPhoto(file: File) {
    const filePath = `vehicle_photos/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            console.log('Photo téléchargée avec succès. URL:', url);
            // Enregistrer l'URL de la photo dans Firestore ou effectuer toute autre action nécessaire
          });
        })
      )
      .subscribe();
  }

  saveMessage(message: string) {
    this.firestore
      .collection('quotes')
      .add({
        message: message,
      })
      .then((docRef) => {
        console.log('Message enregistré avec succès. ID:', docRef.id);
      })
      .catch((error) => {
        console.error("Erreur lors de l'enregistrement du message:", error);
      });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitQuote() {
    if (!this.selectedFile) {
      alert('Veuillez sélectionner une photo de votre véhicule.');
      return;
    }
    // Appel des méthodes pour le téléchargement de la photo et l'enregistrement des données
    this.uploadPhoto(this.selectedFile);
    this.saveMessage(this.message);

    // Enregistrer l'utilisateur et rediriger vers la page de connexion
    this.authService.register(this.email, this.password) 
      .then(() => {
        console.log('Utilisateur enregistré avec succès.');
        this.router.navigate(['/login']); // Redirection vers la page de connexion après l'enregistrement
      })
      .catch((error) => {
        console.error("Erreur lors de l''enregistrement de l''utilisateur :", error);
      });
  }
}
