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
  IonCol,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { carOutline, searchOutline } from 'ionicons/icons';

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
    IonCol,
    IonIcon
  ],
})
export class HomePage {
  constructor(private router: Router) {
    addIcons({ carOutline, searchOutline });
  }

  navigateToSell() {
    this.router.navigate(['/sell']);
  }

  navigateToCars() {
    this.router.navigate(['/cars']);
  }
}
