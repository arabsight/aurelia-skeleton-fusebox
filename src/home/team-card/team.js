import { inject, customElement, containerless, bindable } from 'aurelia-framework';
import { DataService } from '../../shared/data.service';

@inject(DataService)
@containerless()
@customElement('team-card')
export class AureliaTeam {

    @bindable() org;
    @bindable() title;
    users = null;

    constructor(dataService) {
        this.dataService = dataService;
    }

    attached() {
        this.dataService
            .getUsers(this.org)
            .then(users => this.users = users);
    }
}
