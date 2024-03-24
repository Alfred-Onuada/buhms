import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Hall } from 'src/app/interfaces/hall';
import { Room } from 'src/app/interfaces/room';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-pick-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pick-room.component.html',
  styleUrls: ['./pick-room.component.css']
})
export class PickRoomComponent {
  rooms: Room[] = [];
  halls: Hall[] = [];

  constructor(
    private titleService: Title,
    private generalService: GeneralService
  ) {
    this.titleService.setTitle('Get Rooms');
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

  fetchRooms(event: any) {
    const hallId = event.target.value;

    this.generalService.getRooms(hallId).subscribe({
      next: (response) => {
        if (response.status) {
          this.rooms = response.data;
        }
      },
      error: (error) => {
        console.log(error);

        this.hasError = true;
        this.errorMessage = 'Failed to fetch rooms';

        setTimeout(() => {
          this.hasError = false;
          this.errorMessage = '';
        }, 3000);
      }
    });
  }

  selectRoom(roomId: string) {
    this.generalService.pickRoom({roomId}).subscribe({
      next: (response) => {
        if (response.status) {
          this.hasSuccess = true;
          this.successMessage = 'Room selected successfully';

          setTimeout(() => {
            this.hasSuccess = false;
            this.successMessage = '';
          }, 3000);
        }
      },
      error: (error) => {
        console.log(error);

        this.hasError = true;
        this.errorMessage = 'Failed to select room';

        setTimeout(() => {
          this.hasError = false;
          this.errorMessage = '';
        }, 3000);
      }
    });
  }
}
