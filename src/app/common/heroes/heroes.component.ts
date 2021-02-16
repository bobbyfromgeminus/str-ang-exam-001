import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  filterPhrase: string = '';
  filterKey: string = 'name';

  sortby: string = 'id';
  direction: number = 1;

  heroes: Hero[] = this.heroService.getAll();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
  }

  getSortProp(prop:string): void {
    this.sortby = prop;
  }

}
