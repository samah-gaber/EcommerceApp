import { Injectable } from '@angular/core';
import { User } from '../interfaces/user-data';

@Injectable({
    providedIn: 'root'
})

export class UsersListService {
   users:User[] = [];

    returnUsers() {
        return this.users;
    }

    addToUsers(newUser: User) {
        this.retrieveUsers();
        this.users.push(newUser);
        localStorage.setItem('usersList', JSON.stringify(this.users));
    }

    retrieveUsers() {
        if(localStorage.getItem('usersList')) {
            this.users = JSON.parse(localStorage.getItem('usersList'));
        }
        return this.users;
    }

}