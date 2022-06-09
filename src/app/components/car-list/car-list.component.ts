import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarApiService } from './services/car-api.service';
import { MessageService } from './services/message/message.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];
  selectedCar?: Car;
 

  constructor(private carApiService: CarApiService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getCars();
    }


  openDetail(car: Car): void{
    this.selectedCar = car;
    this.messageService.add(`CarsComponent: Selected car id=${car.id}`)
  }

  getCars(): void {
    this.carApiService.getCars()
        .subscribe(cars => this.cars = cars);
}
}
