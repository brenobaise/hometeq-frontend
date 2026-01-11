import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  submitted = false;
  isSubmitting = false;
  serverError: string | null = null;

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });


  get email() {
    return this.form.get('email')!;
  }

  get password() {
    return this.form.get('password')!;
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
      const { email, password } = this.form.getRawValue();
      if (!email || !password) throw new Error('Missing credentials');

      // TODO: Replace with your real auth call (service -> API)
      // await this.authService.login(email, password);

      await new Promise((r) => setTimeout(r, 400));

      this.router.navigateByUrl('/');
    } catch (e) {
      this.serverError = 'Login failed. Please check your details and try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
