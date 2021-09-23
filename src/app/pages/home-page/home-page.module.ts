import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [HomePageComponent, AboutUsComponent, CarouselComponent],
  imports: [SharedModule, RouterModule.forChild(routes), CommonModule],
})
export class HomePageModule {}
