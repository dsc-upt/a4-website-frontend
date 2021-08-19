import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuLinks: string[]=[ 'contact' , 'about-us' ]
  constructor() { }

  colorPick(element: string): string {
    if (element === 'contact')
      return '#DB4437';
    else if (element === 'about-us')
      return '#0F9D58';
    else
      return '#fff'
  }

  ngOnInit(): void {
  }

}
