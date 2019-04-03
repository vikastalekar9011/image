import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-milk-modal',
  templateUrl: './milk-modal.component.html',
  styleUrls: ['./milk-modal.component.scss']
})
export class MilkModalComponent implements OnInit {
  @Input() farmer: any;
  @Input() modal: ModalController;
  public tempFarmer;
  public liter;
  public milliliter;
  constructor() {
  }

  ngOnInit() {

  }
  onClose() {
    this.modal.dismiss();
  }

  save() {
    this.farmer.todaysMilk = this.liter + this.milliliter / 10;
    this.farmer.totalMilk = this.farmer.totalMilk + this.liter + this.milliliter / 10;
    this.modal.dismiss();
  }

}
