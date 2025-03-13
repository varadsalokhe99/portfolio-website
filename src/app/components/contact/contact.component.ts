import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };
  successMessage = '';
  errorMessage = '';

  constructor() {}

  submitForm() {
    const serviceID = 'portfolio_contact';
    const templateID = 'portfolio_contact_form';
    const userID = '0VQ4PT-Uy4w-JjHVO';
  
    emailjs
      .send(serviceID, templateID, this.contactData, userID)
      .then(() => {
        this.successMessage = 'Message sent successfully!';
        this.contactData = { name: '', email: '', message: '' }; 
        
        // Auto-hide notification after 5 seconds
        setTimeout(() => {
          this.closeNotification();
        }, 5000);
      })
      .catch((error) => {
        this.errorMessage = 'Failed to send message!';
        console.error(error);
        
        // Auto-hide notification after 5 seconds
        setTimeout(() => {
          this.closeNotification();
        }, 5000);
      });
  }

  closeNotification() {
    this.successMessage = '';
    this.errorMessage = '';
  }
}
