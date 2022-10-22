import { Component } from '@angular/core';

@Component({
  selector: 'st-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent {

  onClick(index: number, event: Event): void {
    const planetAnchors = document.getElementsByClassName('planet-anchor');
    for (const planetAnchor of [planetAnchors]) {
      planetAnchor.item(0).classList.remove('active');
    }
    (event.currentTarget as Element).classList.add('active');
    document.querySelector('.planets')
      .querySelector('img').style.marginLeft = '-' + (index > 0 ? index * 48.177 : 0) + 'vw';
  }
}
