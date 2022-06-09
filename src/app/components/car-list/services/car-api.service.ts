import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CARS } from 'src/app/model/mock-cars';
import { MessageService } from './message/message.service';


@Injectable({
  providedIn: 'root'
})
export class CarApiService {


  constructor(private messageService: MessageService) { }

  getCars(): Observable<Car[]> {
    const cars = of(CARS );
    this.messageService.add('ciao, sono l\'car service')
    return cars;
  }

  getCar(id: number): Observable<Car> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const car = CARS.find(c => c.id === id)!;
    this.messageService.add(`HeroService: fetched car id=${id}`);
    return of(car);
  }
}
