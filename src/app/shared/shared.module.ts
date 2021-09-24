import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { footerTextComponent } from './components/footer/footer-text/footer-text.component';

@NgModule({
  declarations: [FooterComponent, MenuComponent, footerTextComponent],
  exports: [MenuComponent, FooterComponent,footerTextComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
