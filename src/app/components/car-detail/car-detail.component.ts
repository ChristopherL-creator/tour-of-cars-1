import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarApiService } from "src/app/components/car-list/services/car-api.service";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car?: Car;

  constructor(
    private route: ActivatedRoute,
    private carApiService: CarApiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carApiService.getCar(id)
    .subscribe(car => this.car = car);
  }

  goBack(): void {
  this.location.back();
}

}
