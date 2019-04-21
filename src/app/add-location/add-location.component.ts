import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '../models/index';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  public location: FormGroup;
  constructor(private router: Router, private locationService: LocationService) { }

  ngOnInit() {
    this.location = new FormGroup({
      name: new FormControl('')
    });
  }
  public gotoList() {
    this.router.navigate(['listFarmer']);
  }

  public addLocation() {
    const loc = <Location>this.location.value;
    // console.log('added location' + JSON.stringify(loc));
    // this.router.navigate(['listFarmer']);
    this.locationService.add(loc).subscribe(
      (data) => {
      if (data.status === 'success') {
        this.router.navigate(['listFarmer']);
      } else {
        console.log('error' + JSON.stringify(data.response));
      }
      }, (err) => {
        console.log('error' + JSON.stringify(err));
      }
    );
  }

}
