import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, firstname: 'Nice', lastname: 'Joe' },
  { id: 12, firstname: 'Cool', lastname: 'Dine' },
  { id: 13, firstname: 'Oh', lastname: 'Ding' },
  { id: 14, firstname: 'Coucou', lastname: 'Dong' },
  { id: 15, firstname: 'LoukouKou', lastname: 'Oh' },
  { id: 16, firstname: 'Stash', lastname: 'You' },
  { id: 17, firstname: 'Stache', lastname: 'Touch' },
  { id: 18, firstname: 'Ahlik', lastname: 'My' },
  { id: 19, firstname: 'Didi', lastname: 'Tra' },
  { id: 20, firstname: 'Dum', lastname: 'Lala' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}
 