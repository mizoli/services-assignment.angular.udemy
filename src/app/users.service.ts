import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    counter = 0;

    constructor(private counterService: CounterService) { }

    setToInactive(id: number) {
        console.log('>> onSetToInactive=' + id);

        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);

        this.counter = this.counterService.incrementCounter();
    }

    setToActive(id: number) {
        console.log('>> onSetToActive=' + id);

        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);

        this.counter = this.counterService.incrementCounter();
    }
}