import { Component, Input } from '@angular/core';
import { Man } from '../model/man';
import { TextBox } from '../model/text-box';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-text-box-component',
    template: '<h4 [objectDynamic] = "textBox" appHandleEventDynamic>{{textBox.title}}</h4>'
})
export class DynamicTextBoxComponent {
    @Input() textBox: TextBox;
}
