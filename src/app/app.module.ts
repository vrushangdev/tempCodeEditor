import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MonacoEditorModule, MONACO_PATH } from '@materia-ui/ngx-monaco-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule,
    ReactiveFormsModule
  ],
  providers: [
    {
    provide: MONACO_PATH,
    useValue: 'https://unpkg.com/monaco-editor@0.18.1/min/vs'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
