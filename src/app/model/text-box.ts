let count = 0;
export class TextBox {
    constructor() {
        this.title = 'Title ' + count++;
        this.value = 'Value';
    }
    title: String;
    value: String;
}
