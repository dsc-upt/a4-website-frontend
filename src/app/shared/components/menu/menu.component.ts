import { Component } from '@angular/core';
import { MenuItem } from '../../../models/menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  menuItems : MenuItem[] = [{
    image: 'assets/icons/icons-01.png',
    link: '/contact'
  },
    {
      image: 'assets/icons/icons-03.png',
      link: '/about-us'
    },
    {
      image: 'assets/icons/icons-05.png',
      link: ''
    },
    {
      image: 'assets/icons/icons-07.png',
      link: ''
    },
    {
      image: 'assets/icons/icons-09.png',
      link: ''
    }]
}
