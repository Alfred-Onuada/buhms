import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from "../../header/header.component";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-login',
    standalone: true,
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.css'],
    imports: [CommonModule, HeaderComponent]
})
export class AdminLoginComponent {
  constructor(
    private titleService: Title,
    private authService: AuthService,
    private router: Router
  ) {
    this.titleService.setTitle('Admin Login');
  }

  hasError = false;
  errorMessage = '';


  handleLogin(event: any) {
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
        localStorage.setItem('userType', 'admin');

        this.router.navigate(['/admin/dashboard']);
      },
      error: (error) => {
        console.error(error);

        this.hasError = true;
        this.errorMessage = 'Invalid credentials. Please try again.';

        setTimeout(() => {
          this.hasError = false;
          this.errorMessage = '';
        }, 3000);
      }
    });

    event.preventDefault();
  }
}
