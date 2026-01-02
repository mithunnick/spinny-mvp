import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  IonGrid,
  IonRow,
  IonCol,
  IonText
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { CarService } from '../services/car.service';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: 'cars.page.html',
  styleUrls: ['cars.page.scss'],
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
    IonGrid,
    IonRow,
    IonCol,
    IonText
  ],
})
export class CarsPage implements OnInit {
  cars: Car[] = [];

  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadApprovedCars();
  }

  loadApprovedCars() {
    this.cars = this.carService.getApprovedCars();
  }

  navigateToDetail(carId: string) {
    this.router.navigate(['/car', carId]);
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
