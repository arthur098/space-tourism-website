import { Component, OnInit } from '@angular/core';
import {PlanetModel} from '../../model/PlanetModel';


@Component({
  selector: 'st-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss', '../pages.scss']
})
export class DestinationComponent implements OnInit {

  selectedPlanet: PlanetModel;
  moon: PlanetModel;
  mars: PlanetModel;
  europa: PlanetModel;
  titan: PlanetModel;

  planets: PlanetModel[];

  ngOnInit(): void {
    this.moon = new PlanetModel('Moon',
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      '384,400',
      '3 days');
    this.mars = new PlanetModel('Mars',
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      '225 mil.',
      '9 Months');
    this.europa = new PlanetModel('Europa',
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      '628 mil. ',
      '3 years');
    this.titan = new PlanetModel('TITAN',
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      '1.6 Bil.',
      '7 years');
    this.selectedPlanet = this.moon;
    this.planets = [this.moon,
      this.mars,
      this.europa,
      this.titan];
  }

  onClick(index: number, event: Event): void {
    const planetAnchors = document.getElementsByClassName('planet-anchor');
    const currentTarget = event.currentTarget as HTMLElement;

    this.selectedPlanet = this.planets[index];
    for (const planetAnchor of Array.from(planetAnchors)) {
      planetAnchor.classList.remove('active');
    }

    currentTarget.classList.add('active');
    document.querySelector(currentTarget.dataset.image).scrollIntoView({
      inline: 'start',
      behavior: 'smooth',
      block: 'nearest'
    });
  }
}
