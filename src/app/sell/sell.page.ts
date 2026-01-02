import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonImg,
  IonCard,
  IonCardContent,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeCircle, cloudUploadOutline } from 'ionicons/icons';
import { CarService } from '../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sell',
  templateUrl: 'sell.page.html',
  styleUrls: ['sell.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonImg,
    IonCard,
    IonCardContent,
    IonIcon
  ],
})
export class SellPage implements OnInit {
  sellCarForm!: FormGroup;
  submitted = false;
  selectedImages: string[] = []; // Store base64 data URLs

  brands = [
    'Toyota',
    'Honda',
    'BMW',
    'Mercedes',
    'Ford',
    'Audi',
    'Tesla',
    'Volkswagen',
    'Hyundai',
    'Mazda',
    'Nissan',
    'Chevrolet',
    'Kia',
    'Volvo'
  ];

  fuelTypes = [
    'Petrol',
    'Diesel',
    'Electric',
    'Hybrid'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sellCarForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      fuel: ['', Validators.required],
      km: ['', [Validators.required, Validators.min(0)]],
      price: ['', [Validators.required, Validators.min(1)]],
      city: ['', Validators.required]
    });
  }

  get f() {
    return this.sellCarForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.sellCarForm.invalid) {
      return;
    }

    const formData = this.sellCarForm.value;

    // Add car to service with Pending status
    this.carService.addCar({
      brand: formData.brand,
      model: formData.model,
      year: parseInt(formData.year),
      fuel: formData.fuel,
      km: parseInt(formData.km),
      price: parseFloat(formData.price),
      city: formData.city,
      image: '/assets/images/car-placeholder.jpg',
      status: 'Pending'
    });

    // Navigate to cars page
    this.router.navigate(['/cars']);
  }

  onReset() {
    this.submitted = false;
    this.sellCarForm.reset();
  }
}
