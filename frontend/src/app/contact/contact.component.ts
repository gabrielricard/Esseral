import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../material.module';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    emailjs.init('0sUDzQGPojH-7J9vE');
  }

  onSubmit(e: Event) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;

  // 1. Envoi à Esseral
  emailjs.sendForm('service_hg27ocq', 'template_xsmw6od', form, '0sUDzQGPojH-7J9vE')
    .then(() => {
      // 2. Récupère les infos AVANT de reset le formulaire
      const formData = new FormData(form);
      const user_name = formData.get('user_name') as string;
      const user_email = formData.get('user_email') as string;

      // Vérifie que user_email n'est pas vide
      if (!user_email) {
        alert('Erreur : le courriel est vide.');
        return;
      }

      // 3. Envoi de l'accusé de réception à l'utilisateur
      emailjs.send('service_hg27ocq', 'template_ekwh7ow', {
        user_name,
        user_email
      }, '0sUDzQGPojH-7J9vE')
      .then(() => {
        this.router.navigate(['/contact-confirmation']);
        form.reset();
      })
      .catch((err) => {
        alert('Votre message a bien été envoyé, mais l\'accusé de réception n\'a pas pu être envoyé.');
        this.router.navigate(['/contact-confirmation']);
        form.reset();
      });

    }, () => {
      alert('Erreur lors de l\'envoi. Veuillez réessayer.');
    });
}
}