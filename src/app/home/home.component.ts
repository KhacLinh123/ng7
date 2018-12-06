import { Component, OnInit, ElementRef } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public username: String = '';
  private elements = [];
  private todo = [
    'Group',
    'Text Box',
    'Check Box'
  ];
  private listGroup: String[] = [];
  constructor(private element: ElementRef) { }

  ngOnInit() {
    // Details element HTML
    this.elements = this.element.nativeElement.childNodes;
  }

  public drop(event: CdkDragDrop<string[]>) {
    const nodeElement = this.createHTMLForDrop(event.previousIndex);
    this.elements[1].childNodes[1].appendChild(nodeElement);
  }

  private createHTMLForDrop(index: number): HTMLDivElement {
    switch (index) {
      case 0:
        const nodeGroup = document.createElement('div');
        nodeGroup.addEventListener('click', () => this.clickCreateModel(0));
        const textnodeGroup = document.createTextNode(this.todo[index]);
        nodeGroup.appendChild(textnodeGroup);
        this.listGroup.push(this.todo[index]);
        return nodeGroup;
      case 1:
        const nodeText = document.createElement('div');
        const textnodeText = document.createTextNode(this.todo[index]);
        nodeText.appendChild(textnodeText);
        return nodeText;
      case 2:
        const nodeCheck = document.createElement('div');
        const textnodeCheck = document.createTextNode(this.todo[index]);
        nodeCheck.appendChild(textnodeCheck);
        return nodeCheck;
    }
    return null;
  }

  private clickCreateModel(index: number) {
    console.log(this.listGroup);
  }
  private createGroupModel(): any {

    return null;
  }
}
