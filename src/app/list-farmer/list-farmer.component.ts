import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MilkModalComponent } from '../milk-modal/milk-modal.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-farmer',
  templateUrl: './list-farmer.component.html',
  styleUrls: ['./list-farmer.component.scss']
})
export class ListFarmerComponent implements OnInit {

  constructor(private modal: ModalController, private router: Router) { }
  public farmersMaster;
  public farmers;
  public searchText;
  public today = new Date();
  public location = 'Butewadi';
  ngOnInit() {
    this.farmersMaster = [
      {
        name: 'Vittal Talekar',
        totalMilk: 0,
        todaysMilk: 0,
      },
      {
        name: 'Vishal Talekar',
        totalMilk: 0,
        todaysMilk: 0,
      },
      {
        name: 'Yogesh Talekar',
        totalMilk: 0,
        todaysMilk: 0,
      },
      {
        name: 'Yuvraj Talekar',
        totalMilk: 0,
        todaysMilk: 0,
      },
      {
        name: 'Sagar Talekar',
        totalMilk: 0,
        todaysMilk: 0,
      },
    ];
    this.farmers = [
      {
        name: 'Vittal Talekar',
        totalMilk: 0,
        todaysMilk: 0,
      },
      {
        name: 'Vishal Talekar',
        totalMilk: 0,
        todaysMilk: 0,
      },
      {
        name: 'Yogesh Talekar',
        totalMilk: 0,
        todaysMilk: 0,
      },
      {
        name: 'Yuvraj Talekar',
        totalMilk: 0,
        todaysMilk: 0,
      },
      {
        name: 'Sagar Talekar',
        totalMilk: 0,
        todaysMilk: 0,
      },
    ];
  }

  public onInput() {
    setTimeout(() => {
      this.farmers = [];
      this.farmersMaster.map((farmer) => {
        if (farmer.name.toLowerCase().search(this.searchText.toLowerCase()) !== -1) {
          this.farmers.push(farmer);
        }
      });
    }, 500);
  }
  public async getVal(index) {
    console.log(this.farmers[index].name);
    const modal = await this.modal.create(
      {
        component: MilkModalComponent,
        componentProps: { farmer: this.farmers[index], controller: this.modal }
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
