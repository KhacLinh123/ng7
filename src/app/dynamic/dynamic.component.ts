import { Component, Input, Inject } from '@angular/core';
import { Man } from '../model/man';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-component',
  template: '<h2 [objectDynamic] = "user" appHandleEventDynamic>{{user.username}}</h2>'
})
export class DynamicComponent {
  @Input() user: Man;
  constructor() {
  }
}
