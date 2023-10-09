import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 43

public changeNameB:boolean = false;
public changeAgeB:boolean = false;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }


  changeHero():void {
    this.name = 'IronFist';
    this.changeNameB = true;
  }

  changeAge():void {
    this.age = 49;
    this.changeAgeB = true;
  }

}
