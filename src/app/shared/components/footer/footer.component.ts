import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  address: string[] = [
    'Strada Traian Lalescu, nr.2/A, cam.702',
    'Facultatea de Arhitectură și Urbanism Timișoara',
    'Contact: asociatiadela4@gmail.com'
  ]

  constructor() {
  }

}
