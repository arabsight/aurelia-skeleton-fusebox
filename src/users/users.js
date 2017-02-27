import { inject } from 'aurelia-framework';
import { DataService } from '../shared/data.service';

@inject(DataService)
export class Users {

    heading = 'Github Users';
    users = [];
    isBusy = false;

    constructor(dataService) {
        this.dataService = dataService;
    }

    activate(params) {
        this.dataService
            .getUsers(params.org)
            .then(users => this.users = users);
    }
}
