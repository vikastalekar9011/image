import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { LoginService } from './services/login.service';
// import { User, LoginModel } from '../models';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router,
    private loadingService: LoadingService, private loginService: LoginService) { }
  public mobile: any;
  loginForm = this.fb.group({
    // mobile: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
  });
  ngOnInit() {
    this.getMobile();
  }

  async getMobile() {
    this.mobile = await localStorage.getItem('phoneNumber');
  }
  async setLoaction(location) {
     await localStorage.setItem('location', JSON.stringify(location));
  }

  public onSubmit(loginForm) {
    // this.loadingService.startLoading();
    // console.log(loginForm.value);
    const logindata = {
      mobile: this.mobile,
      password: this.loginForm.value.password
    };
    // alert(JSON.stringify(logindata));
    this.loginService.login(logindata).subscribe(
      (data) => {
        if (data.status === 'success') {
          this.setLoaction(data.payload.location);
          if (data.payload.role === 'Admin') {
            this.router.navigate(['/listFarmer']);
          }
          if (data.payload.role === 'Plant Head') {
            this.router.navigate(['/total']);
          }
          if (data.payload.role === 'Milk Collector') {
            this.router.navigate(['/addMilk']);
          }
        }
        this.loadingService.stopLoading();
      },
      (error) => {
        this.loadingService.stopLoading();
        alert(JSON.stringify(error));
      }
    );

  }

}
