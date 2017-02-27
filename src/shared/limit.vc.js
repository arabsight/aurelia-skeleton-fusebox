export class LimitValueConverter {
    toView(value, max) {
        return value && value.slice(0, max);
    }
}
