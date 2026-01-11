import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.css',
})
export class SignupPage {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  submitted = false;
  isSubmitting = false;
  serverError: string | null = null;

  form = this.formBuilder.group({
    userFirstName: ['', [Validators.required]],
    userSecondName: ['', Validators.required],
    userAddress: ['', [Validators.required]],
    userPostCode: [
      '',
      [Validators.required, Validators.pattern(/^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i)],
    ],

    userPhoneNumber: [
      '',
      [Validators.required, Validators.pattern(/^[0-9+\s()-]{10,20}$/)],
    ],

    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get email() {
    return this.form.get('email')!;
  }

  get password() {
    return this.form.get('password')!;
  }
  control(name: string) {
    return this.form.get(name)!;
  }


  showError(controlName: string) {
    const c = this.form.get(controlName);
    return !!c && c.invalid && (c.touched || this.submitted);
  }

  async submit() {
    this.serverError = null;
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    try {
      const data = this.form.getRawValue();

      // call api
      await new Promise((r) => setTimeout(r, 400));

      this.router.navigateByUrl('/login');

    } catch (e) {
      this.serverError = 'Registration failed. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
