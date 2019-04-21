import { Injectable } from '@angular/core';
import { FarmerListDataService } from './farmer-list-data.service';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { ListUser } from '../interface/list-user';

@Injectable({
  providedIn: 'root'
})
export class FarmerListService {

  farmers: ListUser;

  constructor(private socket: Socket, private dataService: FarmerListDataService) {
    this.socket.on('farmer_saved', (data: any) => { //client knows from server somebody saved farmer
      this.getList(); //update your list
    });

    this.getList().subscribe((data: any) => {
      if (data.status === 'success') {
        this.farmers = <ListUser> data.payload;
      }
    }
    );

  }

  public getList(): Observable<any> {
    return this.dataService.listFarmer();
  }
}
