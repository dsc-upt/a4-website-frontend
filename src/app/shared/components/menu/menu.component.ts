import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuLinks: string[]=[ 'contact' , 'about-us' ]

  colorPick: string[]=['#DB4437','#0F9D58','#fff']
}
