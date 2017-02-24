import { bindable, customElement } from 'aurelia-framework';

@customElement('user-card')
export class UserCard {
    @bindable user;
}
