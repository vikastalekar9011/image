import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private camera: Camera) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    console.log('images');
    this.camera.getPicture(options).then((imageData) => {
      // Do something with the new photo
      // const binaryData = [];
      // binaryData.push(imageData);
      // window.URL.createObjectURL(new Blob(binaryData, { type: 'application/zip' }));
      console.log('images' + imageData);
    }, (err) => {
      // Handle error
      console.log('Camera issue: ' + err);
    });
  }
}
