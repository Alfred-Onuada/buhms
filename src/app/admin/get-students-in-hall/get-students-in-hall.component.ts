import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Student } from 'src/app/interfaces/student';
import { Hall } from 'src/app/interfaces/hall';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-get-students-in-hall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-students-in-hall.component.html',
  styleUrls: ['./get-students-in-hall.component.css']
})
export class GetStudentsInHallComponent implements OnInit {
  students: Student[] = [];

  hasError = false;
  errorMessage = '';
  hasSuccess = false;
  successMessage = '';

  halls: Hall[] = [];
  
  constructor(
    private title: Title,
    private generalService: GeneralService
  ) {
    this.title.setTitle('Get Students In Hall');
  }

  ngOnInit(): void {
    this.generalService.getHalls().subscribe((response) => {
      if (response.status) {
        this.halls = response.data;
      }
    });
  }

  fetchStudents(event: any) {
    const hallId = event.target.value;

    // fetch students from the hall
    this.generalService.getStudentsInHall(hallId).subscribe({
      next: (response) => {
        if (response.status) {
          this.students = response.data;
        }
      },
      error: (error) => {
        this.hasError = true;
        this.errorMessage = error.error.message;

        setTimeout(() => {
          this.hasError = false;
          this.errorMessage = '';
        }, 3000);
      }
    });
  }
}
