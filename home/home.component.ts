import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DataService } from '../data.service';
import { Man } from '../model/man';
import { TextBox } from '../model/text-box';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('dynamic', { read: ViewContainerRef }) dynamicText: ViewContainerRef;
  @ViewChild('dynamicproperty', { read: ViewContainerRef }) dynamicTextProperty: ViewContainerRef;
  private texbox: TextBox;
  private lstTextBox: TextBox[] = [];
  private todo = [
    'Text'
  ];
  private listGroup: String[] = [];
  constructor(private service: DataService) { }

  ngOnInit() {
    // Details element HTML
  }

  public drop(event: CdkDragDrop<string[]>) {
    // const nodeElement = this.createHTMLForDrop(event.previousIndex);
    // this.elements[1].childNodes[1].appendChild(nodeElement);
    this.service.setRootViewContainerRef(this.dynamicText, this.dynamicTextProperty);
    this.texbox = new TextBox();
    this.lstTextBox.push(this.texbox);
    this.service.addDynamicComponent(this.lstTextBox[this.lstTextBox.length - 1]);
  }
}
