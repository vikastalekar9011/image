import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { LoginService } from './services/login.service';
import { User, LoginModel } from '../models';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router,
    private loadingService: LoadingService, private loginService: LoginService) { }

  loginForm = this.fb.group({
    userName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
  });
  ngOnInit() {

  }
  public onSubmit(loginForm: LoginModel) {
    // this.loadingService.startLoading();
    this.loginService.login(loginForm).subscribe(
      (data) => {
        if (data.status === 'success') {
          this.router.navigate(['/listFarmer']);
        }
      },
      (error) => {
       alert(JSON.stringify(error));
      },
      () => {
        this.loadingService.stopLoading();
      }
    );

  }

}
