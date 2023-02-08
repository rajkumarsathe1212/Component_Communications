import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { FormsModule } from '@angular/forms';
import { Child2Component } from './parent/child2/child2.component';
import { Child3Component } from './parent/child3/child3.component';
import { Child4Component } from './parent/child4/child4.component';
import { Child5Component } from './parent/child5/child5.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
