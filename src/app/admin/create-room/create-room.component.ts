import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Hall } from 'src/app/interfaces/hall';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-create-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit{
  constructor(
    private titleService: Title,
    private generalService: GeneralService
  ) {
    this.titleService.setTitle('Create Room');
  }

  hasError = false;
  errorMessage = '';
  hasSuccess = false;
  successMessage = '';

  halls: Hall[] = []

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

  handleCreateRoom(event: any) {
    // get all fields from the form
    const form = event.target;
    const numberOfBeds = form.numberOfBeds.value;
    const roomNumber = form.roomNumber.value;
    const hallId = form.hallId.value;

    // put all fields in an object
    const data = {
      numberOfBeds,
      roomNumber,
      hallId,
    };

    console.log(data);

    // send the object to the server
    this.generalService.createRoom(data).subscribe({
      next: (response) => {
        console.log(response);

        this.hasSuccess = true;
        this.successMessage = 'Room created successfully.';

        event.target.reset();

        setTimeout(() => {
          this.hasSuccess = false;
          this.successMessage = '';
        }, 5000);
      },
      error: (error) => {
        console.log(error);

        this.hasError = true;
        this.errorMessage = 'Room Creation Failed';

        setTimeout(() => {
          this.hasError = false;
          this.errorMessage = '';
        }, 5000);
      }
    });

    event.preventDefault();
  }
}
