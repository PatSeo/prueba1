import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './dbz-add-character.component.html',
  styleUrls: ['./dbz-add-character.component.css']
})
export class DbzAddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();



  public character: Character ={
    name: '',
    poder: 0
  }

  emitCharacter():void{
    console.log(this.character);
    if (this.character.name.length == 0) return
    this.onNewCharacter.emit(this.character)
    // this.character = {name: '', poder: 0}
    this.character.name = ''
    this.character.poder = 0
  }

}
