import { Component, Input } from '@angular/core';
import { hi } from './function';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
            <button class="btn btn-primary" (click)="sayHello()">Say Hello</button>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

sayHello(){
  hi();
}
   
}
