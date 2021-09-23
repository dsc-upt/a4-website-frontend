import { Component } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";
import { Articles } from '../../../../models/articles';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({opacity: 0}),
        animate('300ms', style({opacity: 1}))
      ]),
      transition('* => void', [
        animate('300ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class CarouselComponent {
  number = 0;
  articles: Articles[] = [{
    image: './assets/images/Frame 2.svg',
    link: '/about-us'
  },
    {
      image: './assets/images/photo 02.svg',
      link: '/about-us'
    }
  ]

}
