import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListFarmerComponent } from './list-farmer/list-farmer.component';
import { AddFarmerComponent } from './add-farmer/add-farmer.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { SettingsComponent } from './settings/settings.component';
import { TotalComponent } from './total/total.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listFarmer', component: ListFarmerComponent },
  { path: 'addFarmer', component: AddFarmerComponent },
  { path: 'addLocation', component: AddLocationComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'total', component : TotalComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
