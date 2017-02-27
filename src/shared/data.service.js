import 'whatwg-fetch';
import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(HttpClient)
export class DataService {

    constructor(http) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('https://api.github.com/');
        });

        this.http = http;
    }

    getUsers(org) {
        let path = org ? `orgs/${org}/members` : 'users';

        return this.http
            .fetch(path)
            .then(response => response.json());
    }

    // getMembers(org) {
    //     return this.http
    //         .fetch(`orgs/${org}/members`)
    //         .then(response => response.json());
    // }
}
