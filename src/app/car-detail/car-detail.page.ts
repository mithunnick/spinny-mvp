import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonBackButton,
  IonButtons,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonButton,
  IonIcon,
  IonText
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { CarService } from '../services/car.service';
import { Car } from '../models/car.model';
import { addIcons } from 'ionicons';
import { 
  calendarOutline, 
  speedometerOutline, 
  flameOutline, 
  locationOutline,
  cashOutline,
  checkmarkCircle,
  timeOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-car-detail',
  templateUrl: 'car-detail.page.html',
  styleUrls: ['car-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonBackButton,
    IonButtons,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonButton,
    IonIcon,
    IonText
  ],
})
export class CarDetailPage implements OnInit {
  car: Car | undefined;
  carId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {
    addIcons({ 
      calendarOutline, 
      speedometerOutline, 
      flameOutline, 
      locationOutline,
      cashOutline,
      checkmarkCircle,
      timeOutline
    });
  }

  ngOnInit() {
    this.carId = this.route.snapshot.paramMap.get('id');
    if (this.carId) {
      this.loadCarDetails(this.carId);
    }
  }

  loadCarDetails(id: string) {
    this.car = this.carService.getCarById(id);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  }

  formatKm(km: number): string {
    return new Intl.NumberFormat('en-US').format(km) + ' km';
  }

  goBack() {
    this.router.navigate(['/cars']);
  }

  getStatusColor(status: string): string {
    return status === 'Approved' ? 'success' : 'warning';
  }
}
