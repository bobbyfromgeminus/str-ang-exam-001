import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  list: Hero[] = [
    {
      "id": 1, 
      "name": "Doctor Strange", 
      "superPower": "Mastery of magic", 
      "address": "New York"
    },
    {
      "id": 2, 
      "name": "Black Panther", 
      "superPower": "Technological superpower (Vibranium)", 
      "address": "Wakanda"
    },
    {
      "id": 3, 
      "name": "Rocket Raccoon", 
      "superPower": "Humanized physiology", 
      "address": "Anywhere in outer Space"
    },
    {
      "id": 4, 
      "name": "Spiderman", 
      "superPower": "Spider-sense", 
      "address": "New York"
    },
    {
      "id": 5, 
      "name": "Groot", 
      "superPower": "Plant regeneration", 
      "address": "Where Rocket Raccoon lives"
    },
    {
      "id": 6, 
      "name": "Deadpool", 
      "superPower": "Immortality and great humor", 
      "address": "South Richmond"
    },
    {
      "id": 7, 
      "name": "Adam Warlock", 
      "superPower": "Unique biology", 
      "address": "South Richmond"
    },
    {
      "id": 8, 
      "name": "Ant-Man", 
      "superPower": "Miniaturization", 
      "address": "San Francisco"
    }
  ];

  constructor() { }


  getAll(): Hero[] {
    return (this.list.filter(item => item));
  }

}