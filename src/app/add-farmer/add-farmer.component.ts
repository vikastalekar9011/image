import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Farmer, Location } from '../models/index';
@Component({
  selector: 'app-add-farmer',
  templateUrl: './add-farmer.component.html',
  styleUrls: ['./add-farmer.component.scss']
})
export class AddFarmerComponent implements OnInit {

  constructor(private router: Router) { }
  public farmer: FormGroup;
  public locations: Location[];
  ngOnInit() {
    this.farmer = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      middleName: new FormControl(''),
      mobile: new FormControl(''),
      location: new FormControl('')
    });
    this.locations = [
      { name: 'Butewadi', id: '1' },
      { name: 'Chas', id: '2' },
      { name: 'Pangari', id: '3' }
    ];
  }
  public gotoList() {
    this.router.navigate(['listFarmer']);
  }
  public addFarmer() {
    const farmer = <Farmer>this.farmer.value;
    console.log(JSON.stringify(farmer));
    this.router.navigate(['listFarmer']);
  }
}
