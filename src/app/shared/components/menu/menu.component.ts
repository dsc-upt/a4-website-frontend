import { Component } from '@angular/core';
import { MenuItem } from '../../../models/menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuLinks: string[]=[ 'contact' , 'about-us' ]

  menuItems: MenuItem[] = [{
    image: 'assets/icons-01%201.png',
    link: 'http://localhost:4200/contact'
  },
    {
      image: 'assets/icons-03%201.png',
      link: 'http://localhost:4200/about-us'
    },
    {
      image: 'assets/icons-05%201.png',
      link: ''
    },
    {
      image: 'assets/icons-07%201.png',
      link: ''
    },
    {
      image: 'assets/icons-09%201.png',
      link: ''
    }]
}
