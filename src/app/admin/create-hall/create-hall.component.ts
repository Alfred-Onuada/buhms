import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-hall.component.html',
  styleUrls: ['./create-hall.component.css']
})
export class CreateHallComponent {
  constructor(
    private titleService: Title,
    private generalService: GeneralService,
    private router: Router
  ) {
    this.titleService.setTitle('Create Hall');
  }

  hasError = false;
  errorMessage = '';
  hasSuccess = false;
  successMessage = '';
  loading = false;

  handleCreateHall(event: any) {
    this.loading = true;

    // get all fields from the form
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const type = form.type.value;
    const gender = form.gender.value;

    // put all fields in an object
    const data = {
      name,
      description,
      type,
      gender,
    };

    console.log(data);

    // send the object to the server
    this.generalService.createHall(data).subscribe({
      next: (response) => {
        console.log(response);

        this.hasSuccess = true;
        this.successMessage = 'Hall created successfully.';

        event.target.reset();

        setTimeout(() => {
          this.hasSuccess = false;
          this.successMessage = '';
        }, 5000);
      },
      error: (error) => {
        console.error(error);

        if (error.status === 401) {
          this.router.navigate(['/admin/login']);
        }

        this.hasError = true;
        this.errorMessage = 'Hall creation failed try again';

        setTimeout(() => {
          this.hasError = false;
          this.errorMessage = '';
        }, 5000);

        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });

    event.preventDefault();
  };
}
