import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from "../../header/header.component";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-admin',
    standalone: true,
    templateUrl: './register-admin.component.html',
    styleUrls: ['./register-admin.component.css'],
    imports: [CommonModule, HeaderComponent]
})
export class RegisterAdminComponent {
  title = 'Register Admin';
  errorMessage = '';
  hasError = false;

  constructor(
    private titleService: Title,
    private authService: AuthService,
    private router: Router
  ) {
    this.titleService.setTitle(this.title);
  }

  handleAdminRegistration(event: any) {
    // get all fields from the form
    const form = event.target;
    const userName = form.userName.value;
    const password = form.password.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;

    // put all fields in an object
    const data = {
      userName,
      password,
      email,
      phoneNumber,
      firstName,
      lastName
    };

    console.log(data);

    // send the object to the server
    this.authService.adminRegister(data).subscribe({
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
        this.errorMessage = 'Registration failed. Please try again.';

        setTimeout(() => {
          this.hasError = false;
          this.errorMessage = '';
        }, 3000);
      }
    });

    event.preventDefault();
  }
}
