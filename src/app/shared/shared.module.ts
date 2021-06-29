import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        FooterComponent,
        MenuComponent
    ],
  exports: [
    MenuComponent,
    FooterComponent
  ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
