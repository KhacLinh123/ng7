import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { MenuComponent } from './menu/menu.component';
import { DynamicTextBoxComponent } from './dynamic/dynamic-text-box';
import { HandleEventDynamicDirective } from './directive/handle-event-dynamic.directive';
import { DynamicTextBoxPropertyComponent } from './dynamic/dynamic-text-box-property';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    DynamicComponent,
    MenuComponent,
    DynamicTextBoxComponent,
    DynamicTextBoxPropertyComponent,
    HandleEventDynamicDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DynamicComponent, DynamicTextBoxComponent, DynamicTextBoxPropertyComponent]
})
export class AppModule { }
