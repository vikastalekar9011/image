import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Farmer, Location } from '../models/index';
import { LoadingService } from '../services/loading.service';
import { FarmerService } from './services/farmer.service';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-add-farmer',
  templateUrl: './add-farmer.component.html',
  styleUrls: ['./add-farmer.component.scss']
})
export class AddFarmerComponent implements OnInit {
  public locations: Location[];
  farmer: any;
  public loading = false;

  constructor(private socket: Socket, private router: Router, private fb: FormBuilder, private farmerService: FarmerService) { }

  ngOnInit() {
    this.farmer = this.fb.group({
      mobile: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      middleName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      location: ['', Validators.compose([Validators.required])]
    });
    this.farmerService.getLocations().subscribe(
      (data) => {
        if (data.status === 'success') {
          this.locations = data.payload;
        }
      }
    );
  }
  public gotoList() {
    this.router.navigate(['listFarmer']);
  }
  public addFarmer() {
    const farmer = <Farmer>this.farmer.value;
    this.loading = true;
    this.farmerService.addFarmer(farmer).subscribe(
      (data) => {
        if (data.status === 'success') {
          this.socket.emit('farmer_saved');   // tell server that new farmer is saved
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
