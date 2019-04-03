import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public spinnerOption: any = {
    spinner: 'lines',
    duration: null,
    message: null,
    translucent: true,
    cssClass: 'custom-class custom-loading'
  };
  constructor(public loadingController: LoadingController) {
  }
  public async startLoading() {
    const loading = await this.loadingController.create(this.spinnerOption);
    return await loading.present();
  }
  public stopLoading() {
    this.loadingController.dismiss();
  }

}
