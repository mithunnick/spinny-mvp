import { Component, OnInit } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonImg,
  IonBadge,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonIcon
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { CarService } from '../services/car.service';
import { Car } from '../models/car.model';
import { addIcons } from 'ionicons';
import { checkmarkCircle, closeCircle } from 'ionicons/icons';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonImg,
    IonBadge,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonText,
    IonIcon
  ],
})
export class AdminPage implements OnInit {
  allCars: Car[] = [];
  pendingCount: number = 0;
  approvedCount: number = 0;
  rejectedCount: number = 0;

  constructor(private carService: CarService) {
    addIcons({ checkmarkCircle, closeCircle });
  }

  ngOnInit() {
    this.loadAllCars();
  }

  loadAllCars() {
    this.allCars = this.carService.getAllCars();
    this.updateCounts();
  }

  updateCounts() {
    this.pendingCount = this.allCars.filter(car => car.status === 'Pending').length;
    this.approvedCount = this.allCars.filter(car => car.status === 'Approved').length;
    this.rejectedCount = this.allCars.filter(car => car.status === 'Rejected').length;
  }

  approveCar(carId: string) {
    const success = this.carService.updateCarStatus(carId, 'Approved');
    if (success) {
      this.loadAllCars();
    }
  }

  rejectCar(carId: string) {
    const success = this.carService.updateCarStatus(carId, 'Rejected');
    if (success) {
      this.loadAllCars();
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Approved':
        return 'success';
      case 'Rejected':
        return 'danger';
      case 'Pending':
        return 'warning';
      default:
        return 'medium';
    }
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
}
