import 'whatwg-fetch';
import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(HttpClient)
export class Users {
    heading = 'Github Users';
    users = [];
    isBusy = false;

    constructor(http) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('https://api.github.com/');
        });

        this.http = http;
    }

    activate() {
        this.http.fetch('users')
            .then(response => response.json())
            .then(users => this.users = users);
    }
}
