import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuLinks: string[]=[ 'contact' , 'about-us' ]
  constructor() { }

  colorPick: string[]=['#DB4437','#0F9D58','#fff']

  ngOnInit(): void {
  }

}
