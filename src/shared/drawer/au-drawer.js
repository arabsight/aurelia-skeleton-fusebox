import {
    bindable,
    containerless,
    customElement
} from 'aurelia-framework';

@containerless()
@customElement('au-drawer')
export class AuDrawer {
    @bindable router;
}
