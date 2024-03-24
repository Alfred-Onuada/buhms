import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Room } from 'src/app/interfaces/room';
import { GeneralService } from 'src/app/services/general.service';
import { Hall } from 'src/app/interfaces/hall';

@Component({
  selector: 'app-get-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-rooms.component.html',
  styleUrls: ['./get-rooms.component.css']
})
export class GetRoomsComponent implements OnInit {
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
}
