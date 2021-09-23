import { Component } from '@angular/core';
import { Articles } from '../../../../models/articles';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  article: Articles[] = [{
    image: 'assets/images/Frame 2',
    link: '/about-us'
  }
  ]

}
