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

  constructor(private carApiService: CarApiService) { }

  ngOnInit(): void {
    this.getCars();
    }

  getCars(): void {
    this.carApiService.getCars()
        .subscribe(cars => this.cars = cars)
  }

}
