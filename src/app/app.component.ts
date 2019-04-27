import { Component, OnInit } from '@angular/core';
import { Sim } from '@ionic-native/sim/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sim: Sim
  ) {
    this.initializeApp();
    this.sim.requestReadPermission().then(
      () => alert('Permission granted'),
      () => console.log('Permission denied')
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.sim.getSimInfo().then(
      (info) => {
        // alert('Sim info: ' + info.phoneNumber),
          localStorage.setItem('phoneNumber', info.phoneNumber);
      },
      (err) => console.log('Unable to get sim info: ', err)
    );

    this.sim.hasReadPermission().then(
      (info) => console.log('Has permission: ', info)
    );

    if (this.platform.is('desktop')) {
      localStorage.setItem('phoneNumber', '9011584936');
    }

  }
}
