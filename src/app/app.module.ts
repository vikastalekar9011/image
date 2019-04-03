import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListFarmerComponent } from './list-farmer/list-farmer.component';
import { AddFarmerComponent } from './add-farmer/add-farmer.component';
import { MilkModalComponent } from './milk-modal/milk-modal.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { SettingsComponent } from './settings/settings.component';
// import { Camera } from '@ionic-native/camera/ngx';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent, LoginComponent, ListFarmerComponent,
    AddFarmerComponent, MilkModalComponent, AddLocationComponent, SettingsComponent],
  entryComponents: [MilkModalComponent],
  imports: [FormsModule, BrowserModule, ReactiveFormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    // Camera,
    Camera,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
