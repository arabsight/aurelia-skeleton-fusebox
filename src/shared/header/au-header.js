import {
    bindable,
    containerless,
    customElement
} from 'aurelia-framework';

@containerless()
@customElement('au-header')
export class AuHeader {
    @bindable router;
}
