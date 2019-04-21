import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { MilkService } from './services/milk.service';
import { Socket } from 'ngx-socket-io';

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
  milk: any;

  constructor(private socket: Socket, private fb: FormBuilder, private milkService: MilkService) {
  }

  ngOnInit() {
    this.milk = this.fb.group({
      milk_quantity: ['', Validators.compose([Validators.required])],
      lacto: ['20', Validators.compose([Validators.required])],
      fat: ['4.0', Validators.compose([Validators.required])],
      snf: ['8.4', Validators.compose([Validators.required])],
    });
  }
  onClose() {
    this.modal.dismiss();
  }

  addMilk() {
    const milkData = this.milk.value;
    milkData.shift = new Date().getHours() >= 12 ? 'Evening' : 'Morning';
    milkData.farmer = this.farmer._id;
    milkData.amount = milkData.milk_quantity * 23;
   this.milkService.add(milkData).subscribe(
     (data) => {
      this.socket.emit('farmer_saved');   //tell server that new farmer is saved
      this.modal.dismiss();
     }, (err) => {
        console.log('error==' + JSON.stringify(err));
     }
   );
    // this.farmer.todaysMilk = this.liter + this.milliliter / 10;
    // this.farmer.totalMilk = this.farmer.totalMilk + this.liter + this.milliliter / 10;
    // this.modal.dismiss();
  }

}
