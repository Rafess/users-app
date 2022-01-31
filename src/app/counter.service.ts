import { HostBinding, HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
 activeToInactiveCounter = 0;
 inactiveToActiveCounter = 0;

 incrementActiveToInactive() {
   this.activeToInactiveCounter+=1;
   console.log(`Active to Inactive: ${this.activeToInactiveCounter}`);
 }

 incrementInactiveToActive() {
  this.inactiveToActiveCounter+=1;
  console.log(`Inactive to Active: ${this.inactiveToActiveCounter}`);
}
}
