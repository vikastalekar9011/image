import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TotalService } from './services/total.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {
  public total: FormGroup;
  public today = new Date();
  constructor(private totalService: TotalService) { }

  ngOnInit() {
    this.total = new FormGroup({
      quntity: new FormControl('', Validators.required)
    });
  }

  public submitTotal() {
    const totalData = {
      milk_quantity: this.total.value.quntity,
      date: this.today,
      shift :  new Date().getHours() >= 12 ? 'Evening' : 'Morning'
    };
    this.totalService.submitTotal(totalData).subscribe(
      (data) => {
      if (data.status === 'success') {
        // dthis.router.navigate(['listFarmer']);
      } else {
        console.log('error' + JSON.stringify(data.response));
      }
      }, (err) => {
        console.log('error' + JSON.stringify(err));
      }
    );

  }

}
