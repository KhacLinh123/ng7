import { Injectable, Inject, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Man } from './model/man';
import { TextBox } from './model/text-box';
import { DynamicTextBoxComponent } from './dynamic/dynamic-text-box';
import { DynamicTextBoxPropertyComponent } from './dynamic/dynamic-text-box-property';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private factoryResolver;
  private dynamicViewContainer: ViewContainerRef;
  private dynamicPropertyViewContainer: ViewContainerRef;
  constructor(private http: HttpClient, @Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  /**
   * Setting view root
   * @param dynamicContainerRef ViewContainerRef
   * @param dynamicPropertyContainerRef ViewContainerRef
   */
  setRootViewContainerRef(dynamicContainerRef: ViewContainerRef, dynamicPropertyContainerRef: ViewContainerRef) {
    this.dynamicViewContainer = dynamicContainerRef;
    this.dynamicPropertyViewContainer = dynamicPropertyContainerRef;
  }

  /**
   * Add text box component
   * @param textBox TextBox
   */
  addDynamicComponent(textBox: TextBox) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicTextBoxComponent);
    const component = factory
      .create(this.dynamicViewContainer.parentInjector);
    component.instance['textBox'] = textBox;
    this.dynamicViewContainer.insert(component.hostView);
  }

  /**
   * Add property of text box
   * @param textBox TextBox
   */
  addDynamicPropertyComponent(textBox: TextBox) {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicTextBoxPropertyComponent);
    const component = factory
      .create(this.dynamicPropertyViewContainer.parentInjector);
    component.instance['textBox'] = textBox;
    this.dynamicPropertyViewContainer.clear();
    this.dynamicPropertyViewContainer.insert(component.hostView);
  }
}
