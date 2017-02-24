import {
    bindable,
    containerless,
    customElement
} from 'aurelia-framework';

@containerless()
@customElement('au-footer')
export class AuFooter {
    @bindable router;
}
