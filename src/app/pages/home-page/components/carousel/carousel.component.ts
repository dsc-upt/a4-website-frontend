import { Component } from '@angular/core';
import { Articles } from '../../../../models/articles';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
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
