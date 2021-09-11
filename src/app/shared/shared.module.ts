import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [FooterComponent, MenuComponent],
  exports: [MenuComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
