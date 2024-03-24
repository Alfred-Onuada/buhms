import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { Title } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [CommonModule, HeaderComponent]
})
export class LoginComponent {
    // set the title to Login
    title = 'Login';

    constructor(
        private titleService: Title,
        private authService: AuthService,
        private router: Router
    ) {
        this.titleService.setTitle(this.title);
    }

    hasError = false;
  errorMessage = '';
  loading = false;


  handleLogin(event: any) {
    this.loading = true;

    // get all fields from the form
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;

    // put all fields in an object
    const data = {
      password,
      email,
    };

    console.log(data);

    // send the object to the server
    this.authService.login(data).subscribe({
      next: (response) => {
        console.log(response);

        // store token in local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userType', 'student');

        this.router.navigate(['/student/dashboard']);
      },
      error: (error) => {
        console.error(error);

        this.hasError = true;
        this.errorMessage = 'Invalid credentials. Please try again.';

        setTimeout(() => {
          this.hasError = false;
          this.errorMessage = '';
        }, 3000);

        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });

    event.preventDefault();
  }
}
