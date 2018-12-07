import { Directive, HostListener, Input } from '@angular/core';
import { DataService } from '../data.service';
import { TextBox } from '../model/text-box';

@Directive({
  selector: '[appHandleEventDynamic]'
})
export class HandleEventDynamicDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('objectDynamic') objectDynamic: TextBox;
  @HostListener('click') onMouseClick() {
    console.log(this.objectDynamic);
    this.service.addDynamicPropertyComponent(this.objectDynamic);
  }
  constructor(private service: DataService) { }

}
