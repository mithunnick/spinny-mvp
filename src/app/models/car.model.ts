export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  km: number;
  price: number;
  city: string;
  image: string;
  status: 'Pending' | 'Approved';
}
