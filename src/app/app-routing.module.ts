import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us-page/about-us-page.module').then(m => m.AboutUsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
