import { UsersService } from './users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private usersService: UsersService) {}
  inactiveUsers = this.usersService.inactiveUsers;
  activeUsers = this.usersService.activeUsers;
  setToInactive(id:number) { this.usersService.setToInactive(id)}
  setToActive(id:number) { this.usersService.setToActive(id)}

  title = 'user-app';

}
