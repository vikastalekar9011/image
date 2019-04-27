import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { SettingService } from './services/setting.service';
import { async } from 'q';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

 public location: any;
 public locations: Location[];
 constructor(private router: Router, private settingService: SettingService) { }

  ngOnInit() {
    this.settingService.getLocations().subscribe(
      (data) => {
        if (data.status === 'success') {
          this.locations = data.payload;
        }
      }
    );
    this.location = new FormControl('', Validators.required);
  }

  public gotoList() {
    this.router.navigate(['listFarmer']);
  }

  public async setLocation() {
    console.log(JSON.stringify(this.location.value));
    await localStorage.setItem('location', JSON.stringify(this.location.value));
    this.router.navigate(['listFarmer']);
  }
}
