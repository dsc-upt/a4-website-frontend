import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
