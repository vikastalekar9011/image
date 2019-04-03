import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';




@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router, private photoService: PhotoService) { }

  ngOnInit() {

    // Set the handler to run every time we take a picture
    // this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
    //   console.log(result);
    //   // do something with the result
    // });
  }


  public gotoList() {
    this.router.navigate(['listFarmer']);
  }
  public openCamera() {
    this.photoService.takePicture();
  }
}
