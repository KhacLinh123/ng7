import { Directive, ElementRef } from '@angular/core';
import { Man } from './model/man';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appMakeDomBetter]'
})
export class MakeDomBetterDirective {

  private elements;
  private _person: Man;


  constructor(private element: ElementRef) {
  }

  public testTing() {
    console.log(this.element);
  }

  public addHTML(index: number, person: Man) {
    this.elements = this.element.nativeElement.childNodes;
    this._person = person;
    console.log(this.elements);
    const nodeElement = this.createHTMLForDrop(index);
    this.elements[1].appendChild(nodeElement);
  }

  public createHTMLForDrop(index: number): HTMLDivElement {
    switch (index) {
      case 0:
        const nodeGroup = document.createElement('div');
        // // nodeGroup.addEventListener('click', () => this.clickCreateModel(0));
        // const textnodeGroup = document.createTextNode('ss');
        // nodeGroup.appendChild(textnodeGroup);
        nodeGroup.setAttribute('ng-model', '_person.username');

        // this.listGroup.push(this.todo[index]);
        return nodeGroup;
      case 1:
        const nodeText = document.createElement('div');
        const textnodeText = document.createTextNode('â');
        nodeText.appendChild(textnodeText);
        return nodeText;
      case 2:
        const nodeCheck = document.createElement('div');
        const textnodeCheck = document.createTextNode('ccc');
        nodeCheck.appendChild(textnodeCheck);
        return nodeCheck;
    }
    return null;
  }

}
