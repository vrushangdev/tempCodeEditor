import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeEditor';
  editorOptions = {theme: 'vs-dark', languages: 'javascript,python3'};
  code = '';
  updatedCode = '';

  onChange($event: Event) {
console.log(this.code);
this.updatedCode = this.code;
}
}
