import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';



@Injectable({providedIn: 'root'})
export class DbzService {


    public characters:Character[]=[{
        id: uuid(),
        name:'Krillin',
        poder: 1000
    },
    {
        id: uuid(),
        name:'Goku',
        poder: 10000 
    },{
        id: uuid(),
        name: 'Trunk',
        poder: 150
    }];

    addCharacter(character:Character):void{
        console.log(character);
        
        this.characters.push({id: uuid(), ...character})
        console.log(this.characters);
    }
    // onDeleteC(index:number):void{
    //     console.log({index});
    //     this.characters.splice(index,1)
    // }
    onDeleteCharacterById(id:string){
        this.characters =this.characters.filter(character =>character.id !==id);
    }
    
} 