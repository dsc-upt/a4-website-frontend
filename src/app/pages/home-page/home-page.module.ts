import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [HomePageComponent, AboutUsComponent],
  imports: [SharedModule, RouterModule.forChild(routes), CommonModule],
})
export class HomePageModule {}
