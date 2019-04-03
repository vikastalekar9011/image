import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private loadingService: LoadingService) { }

  loginForm = this.fb.group({
    userName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
  });
  ngOnInit() {

  }
  public onSubmit() {
    this.loadingService.startLoading();
    setTimeout(() => {
      this.loadingService.stopLoading();
      this.router.navigate(['/listFarmer']);
    }, 1000);

  }

}
