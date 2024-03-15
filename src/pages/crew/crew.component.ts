import { Component, OnInit } from '@angular/core';
import {CrewModel} from '../../model/CrewModel';

@Component({
  selector: 'st-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss', '../pages.scss']
})
export class CrewComponent implements OnInit {

  selectedCrewMember: CrewModel;
  douglas: CrewModel;
  mark: CrewModel;
  victor: CrewModel;
  anousheh: CrewModel;
  crewMemberList: CrewModel[];

  crewMemberImageBaseId = '#crew-member-';

  ngOnInit(): void {
    this.douglas = new CrewModel('Commander', 'Douglar Hurley', 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.');
    this.mark = new CrewModel('Mission Specialist', 'Mark Shuttleworth', 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.');
    this.victor = new CrewModel('Pilot', 'Victor Glover', 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ');
    this.anousheh = new CrewModel('Flight engineer', 'Anousheh Ansari', 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ');
    this.selectedCrewMember = this.douglas;
    this.crewMemberList = [this.douglas, this.mark, this.victor, this.anousheh];
  }


  selectCrewMember(event: MouseEvent, index: number): void {
    document.querySelectorAll('.carousel-buttons li button').forEach(node => {
      node.classList.remove('selected');
    });

    document.querySelector(this.crewMemberImageBaseId + index).scrollIntoView({
      inline: 'start',
      behavior: 'smooth',
      block: 'nearest'
    });

    this.selectedCrewMember = this.crewMemberList[index];

    const currentTarget = event.currentTarget as HTMLElement;
    currentTarget.classList.add('selected');
  }

}
