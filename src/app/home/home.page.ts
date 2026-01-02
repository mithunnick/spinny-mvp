import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol
  ],
})
export class HomePage {
  constructor(private router: Router) {}

  navigateToSell() {
    this.router.navigate(['/sell']);
  }

  navigateToCars() {
    this.router.navigate(['/cars']);
  }
}
