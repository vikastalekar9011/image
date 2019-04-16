import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Farmer, Location } from '../models/index';
import { LoadingService } from '../services/loading.service';
import { FarmerService } from './services/farmer.service';
@Component({
  selector: 'app-add-farmer',
  templateUrl: './add-farmer.component.html',
  styleUrls: ['./add-farmer.component.scss']
})
export class AddFarmerComponent implements OnInit {
  public locations: Location[];
  farmer: any;
  public loading = false;

  constructor(private router: Router, private fb: FormBuilder, private farmerService: FarmerService) { }


  ngOnInit() {
    this.farmer = this.fb.group({
      mobile: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      middleName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      location: ['Select', Validators.compose([Validators.required])]
    });
    /*  this.farmer = new FormGroup({
       firstName: new FormControl(''),
       lastName: new FormControl(''),
       middleName: new FormControl(''),
       mobile: new FormControl(''),
       location: new FormControl('Select')
     }); */
    this.locations = [
      { name: 'Select', id: '0' },
      { name: 'Butewadi', id: '1' },
      { name: 'Chas', id: '2' },
      { name: 'Pangari', id: '3' }
    ];
    // this.farmer.location = 'Select';
  }
  public gotoList() {
    this.router.navigate(['listFarmer']);
  }
  public addFarmer() {
    // debugger;
    const farmer = <Farmer>this.farmer.value;
    console.log(JSON.stringify(farmer));
    this.loading = true;
    this.farmerService.addFarmer(farmer).subscribe(
      (data) => {
        if (data.status === 'success') {
          this.router.navigate(['listFarmer']);
        } else {
          console.log(JSON.stringify(data.res));
        }
      },
      (error) => {
        console.log(error);
      }
    );


  }
}
