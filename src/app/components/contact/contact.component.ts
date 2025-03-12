import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.formService.sendFormData(this.contactForm.value).subscribe(
        (response) => {
          console.log('Email sent successfully:', response);
          alert('Your message has been sent successfully.');
          this.contactForm.reset(); // Clear form after submission
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send message. Please try again later.');
        }
      );
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
