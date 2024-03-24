import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from "../../header/header.component";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    imports: [CommonModule, HeaderComponent]
})
export class RegisterComponent {
  title = 'Register';

  constructor(
    private titleService: Title,
    private authService: AuthService,
    private router: Router
  ) {
    this.titleService.setTitle(this.title);
  }

  hasError = false;
  errorMessage = '';

  handleRegister(event: any) {
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const phoneNumber = form.phoneNumber.value;
    const matric = form.matric.value;
    const userName = form.userName.value;

    const data = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      matric,
      userName
    };

    console.log(data);

    this.authService.userRegister(data).subscribe({
      next: (response) => {
        console.log(response);
        
        // store token in local storage
        localStorage.setItem('token', response.data.token);

        this.router.navigate(['/student/dashboard']);
      },
      error: (error) => {
        this.hasError = true;
        console.log(error.error.errors)
        console.log(Object.keys(error.error.errors))
        this.errorMessage = error.error.errors[Object.keys(error.error.errors)[0]][0];

        setTimeout(() => {
          this.hasError = false;
          this.errorMessage = '';
        }, 3000);
      }
    });

    event.preventDefault();
  }
}
