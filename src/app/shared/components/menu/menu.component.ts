import { Component } from '@angular/core';
import { MenuItem } from '../../../models/menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  menuItems : MenuItem[] = [{
    src: 'assets/icons/icons-01.png',
    image: 'assets/icons/icons-01.png',
    imageOnHover : 'assets/icons/hover/icon1.png',
    link: '/contact'
  },
    {
      src: 'assets/icons/icons-03.png',
      image: 'assets/icons/icons-03.png',
      imageOnHover : 'assets/icons/hover/icon2.png',
      link: '/about-us'
    },
    {
      src: 'assets/icons/icons-05.png',
      image: 'assets/icons/icons-05.png',
      imageOnHover : 'assets/icons/hover/icon3.png',
      link: ''
    },
    {
      src: 'assets/icons/icons-07.png',
      image: 'assets/icons/icons-07.png',
      imageOnHover : 'assets/icons/hover/icon4.png',
      link: ''
    },
    {
      src: 'assets/icons/icons-09.png',
      image: 'assets/icons/icons-09.png',
      imageOnHover : 'assets/icons/hover/icon5.png',
      link: ''
    }]
}
