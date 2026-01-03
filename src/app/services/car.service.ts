import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [
    {
      id: '1',
      brand: 'Toyota',
      model: 'Camry',
      year: 2020,
      fuel: 'Petrol',
      km: 45000,
      price: 18500,
      city: 'Los Angeles',
      image: '/assets/images/car-placeholder.jpg',
      status: 'Approved'
    },
    {
      id: '2',
      brand: 'Honda',
      model: 'Civic',
      year: 2019,
      fuel: 'Petrol',
      km: 62000,
      price: 15200,
      city: 'San Francisco',
      image: '/assets/images/car-placeholder.jpg',
      status: 'Approved'
    },
    {
      id: '3',
      brand: 'BMW',
      model: '3 Series',
      year: 2021,
      fuel: 'Diesel',
      km: 28000,
      price: 32000,
      city: 'New York',
      image: '/assets/images/car-placeholder.jpg',
      status: 'Pending'
    },
    {
      id: '4',
      brand: 'Mercedes',
      model: 'C-Class',
      year: 2022,
      fuel: 'Petrol',
      km: 15000,
      price: 38500,
      city: 'Miami',
      image: '/assets/images/car-placeholder.jpg',
      status: 'Approved'
    },
    {
      id: '5',
      brand: 'Ford',
      model: 'Mustang',
      year: 2018,
      fuel: 'Petrol',
      km: 78000,
      price: 22000,
      city: 'Chicago',
      image: '/assets/images/car-placeholder.jpg',
      status: 'Approved'
    },
    {
      id: '6',
      brand: 'Audi',
      model: 'A4',
      year: 2020,
      fuel: 'Diesel',
      km: 35000,
      price: 28900,
      city: 'Boston',
      image: '/assets/images/car-placeholder.jpg',
      status: 'Pending'
    },
    {
      id: '7',
      brand: 'Tesla',
      model: 'Model 3',
      year: 2021,
      fuel: 'Electric',
      km: 22000,
      price: 42000,
      city: 'Seattle',
      image: '/assets/images/car-placeholder.jpg',
      status: 'Approved'
    },
    {
      id: '8',
      brand: 'Volkswagen',
      model: 'Golf',
      year: 2019,
      fuel: 'Petrol',
      km: 55000,
      price: 16800,
      city: 'Denver',
      image: '/assets/images/car-placeholder.jpg',
      status: 'Pending'
    },
    {
      id: '9',
      brand: 'Hyundai',
      model: 'Elantra',
      year: 2020,
      fuel: 'Petrol',
      km: 48000,
      price: 14500,
      city: 'Austin',
      image: '/assets/images/car-placeholder.jpg',
      status: 'Approved'
    },
    {
      id: '10',
      brand: 'Mazda',
      model: 'CX-5',
      year: 2021,
      fuel: 'Petrol',
      km: 30000,
      price: 24700,
      city: 'Portland',
      image: '/assets/images/car-placeholder.jpg',
      status: 'Approved'
    }
  ];

  constructor() {}

  // Get all cars
  getAllCars(): Car[] {
    return [...this.cars];
  }

  // Get car by ID
  getCarById(id: string): Car | undefined {
    return this.cars.find(car => car.id === id);
  }

  // Get cars by status
  getCarsByStatus(status: 'Pending' | 'Approved'): Car[] {
    return this.cars.filter(car => car.status === status);
  }

  // Get pending cars
  getPendingCars(): Car[] {
    return this.getCarsByStatus('Pending');
  }

  // Get approved cars
  getApprovedCars(): Car[] {
    return this.getCarsByStatus('Approved');
  }

  // Update car status
  updateCarStatus(id: string, status: 'Pending' | 'Approved' | 'Rejected'): boolean {
    const car = this.cars.find(c => c.id === id);
    if (car) {
      car.status = status;
      return true;
    }
    return false;
  }

  // Add new car
  addCar(car: Omit<Car, 'id'>): Car {
    const newCar: Car = {
      ...car,
      id: (this.cars.length + 1).toString()
    };
    this.cars.push(newCar);
    return newCar;
  }

  // Delete car
  deleteCar(id: string): boolean {
    const index = this.cars.findIndex(car => car.id === id);
    if (index !== -1) {
      this.cars.splice(index, 1);
      return true;
    }
    return false;
  }
}
