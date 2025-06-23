import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-contact-confirmation',
  imports: [MaterialModule, RouterModule],
  templateUrl: './contact-confirmation.component.html',
  styleUrl: './contact-confirmation.component.css'
})
export class ContactConfirmationComponent {

}
