import { UsersService } from './../../users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
 
  constructor(private UsersService: UsersService) {}
  users = this.UsersService.activeUsers;
  setToInactive(id:number) { 
    this.UsersService.setToInactive(id);
  }
}
