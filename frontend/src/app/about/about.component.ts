import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [MaterialModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
