import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
users: string[] = ['Max', 'Rafes', 'Chris', 'Manu'];
activeUsers = ['Max', 'Rafes'];
inactiveUsers = ['Chris', 'Manu'];
  constructor() { }
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
