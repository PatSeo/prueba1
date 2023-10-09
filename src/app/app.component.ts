import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'App Angular';

  public counter: number = 10;

increaseBy(numero: number): void {
  this.counter +=numero;
}
reset(): void {
  this.counter =10
}


}
