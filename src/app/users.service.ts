import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
users: string[] = ['Max', 'Rafes', 'Chris', 'Manu'];
activeUsers = ['Max', 'Rafes'];
inactiveUsers = ['Chris', 'Manu'];
  constructor(private CounterService: CounterService) { }
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.CounterService.incrementActiveToInactive();

  }
  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.CounterService.incrementInactiveToActive();
  }
}
