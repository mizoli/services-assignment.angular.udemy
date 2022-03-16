import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    setToInactive(id: number) {
        console.log('>> onSetToInactive=' + id);

        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }

    setToActive(id: number) {
        console.log('>> onSetToActive=' + id);

        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }
}