import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MilkModalComponent } from '../milk-modal/milk-modal.component';
import { Router } from '@angular/router';
import { Farmer, Location } from '../models/index';
import { FarmerListService } from './services/farmer-list.service';

@Component({
  selector: 'app-list-farmer',
  templateUrl: './list-farmer.component.html',
  styleUrls: ['./list-farmer.component.scss']
})
export class ListFarmerComponent implements OnInit {

  constructor(private modal: ModalController, private router: Router,
    public farmerListService: FarmerListService) { }
  public farmersMaster;
  public farmers;
  public searchText;
  public today = new Date();
  public location: Location;
  ngOnInit() {
    this.getLocation();
  }
  public async getLocation() {
    this.location = await <Location>JSON.parse(localStorage.getItem('location'));
    console.log(this.location);
  }
  public onInput() {
    setTimeout(() => {
      this.farmers = [];
      this.farmersMaster.map((farmer) => {
        if (farmer.firstName.toLowerCase().search(this.searchText.toLowerCase()) !== -1) {
          this.farmers.push(farmer);
        }
      });
    }, 500);
  }
  public async getVal(index) {
    const modal = await this.modal.create(
      {
        component: MilkModalComponent,
        componentProps: { farmer: this.farmerListService.farmers[index], controller: this.modal }
      }
    );
    return await modal.present();
  }
  public addLocation() {
    this.router.navigate(['addLocation']);
  }
  public addFarmer() {
    this.router.navigate(['addFarmer']);
  }
  public gotoSettings() {
    this.router.navigate(['settings']);
  }
}
