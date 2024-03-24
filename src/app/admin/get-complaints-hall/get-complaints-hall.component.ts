import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Complaint } from 'src/app/interfaces/complaint';
import { Hall } from 'src/app/interfaces/hall';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-get-complaints-hall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-complaints-hall.component.html',
  styleUrls: ['./get-complaints-hall.component.css']
})
export class GetComplaintsHallComponent implements OnInit {
  complaints: Complaint[] = [];
  halls: Hall[] = [];

  constructor(
    private titleService: Title,
    private generalService: GeneralService
  ) {
    this.titleService.setTitle('Get Complaints Hall');
  }

  hasError = false;
  errorMessage = '';
  hasSuccess = false;
  successMessage = '';

  ngOnInit(): void {
    this.generalService.getHalls().subscribe({
      next: (response) => {
        if (response.status) {
          this.halls = response.data;
        }
      },
      error: (error) => {
        console.log(error);

        this.hasError = true;
        this.errorMessage = 'Failed to fetch halls';

        setTimeout(() => {
          this.hasError = false;
          this.errorMessage = '';
        }, 3000);
      }
    
    });
  }

  fetchComplaints(event: any) {
    const hallId = event.target.value;

    this.generalService.getComplaints(hallId).subscribe({
      next: (response) => {
        if (response.status) {
          this.complaints = response.data;
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

  fixComplaint(complaintId: string) {
    this.generalService.fixComplaint(complaintId).subscribe((response) => {
      if (response.status) {
        this.hasSuccess = true;
        this.successMessage = response.message;

        // remove the complaint from the list
        this.complaints = this.complaints.filter((complaint) => complaint.id !== complaintId);

        // remove the success message after 3 seconds
        setTimeout(() => {
          this.hasSuccess = false;
          this.successMessage = '';
        }, 3000);
      } else {
        this.hasError = true;
        this.errorMessage = response.message;

        // remove the error message after 3 seconds
        setTimeout(() => {
          this.hasError = false;
          this.errorMessage = '';
        }, 3000);
      }
    });
  }
}
