import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Complaint } from 'src/app/interfaces/complaint';
import { GeneralService } from 'src/app/services/general.service';
import { Room } from 'src/app/interfaces/room';
import { Hall } from 'src/app/interfaces/hall';

@Component({
  selector: 'app-get-complaints-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-complaints-room.component.html',
  styleUrls: ['./get-complaints-room.component.css']
})
export class GetComplaintsRoomComponent implements OnInit {
  complaints: Complaint[] = [];
  rooms: Room[] = [];
  halls: Hall[] = [];

  constructor(
    private titleService: Title,
    private generalService: GeneralService
  ) {
    this.titleService.setTitle('Get Complaints Room');
  }

  ngOnInit(): void {
    this.generalService.getHalls().subscribe((response) => {
      if (response.status) {
        this.halls = response.data;
      }
    });
  }

  fetchRooms(event: any) {
    const hallId = event.target.value;

    this.generalService.getRooms(hallId).subscribe((response) => {
      if (response.status) {
        this.rooms = response.data;
      }
    });
  }

  fetchComplaints(event: any) {
    const roomId = event.target.value;

    this.generalService.getComplaintsRoom(roomId).subscribe((response) => {
      if (response.status) {
        this.complaints = response.data;
      }
    });
  }

  fixComplaint(complaint: Complaint) {}
}
