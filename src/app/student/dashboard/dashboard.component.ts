import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComplaintComponent } from "../create-complaint/create-complaint.component";
import { PickRoomComponent } from "../pick-room/pick-room.component";
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GetComplaintsRoomComponent } from "../../admin/get-complaints-room/get-complaints-room.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    imports: [CommonModule, CreateComplaintComponent, PickRoomComponent, GetComplaintsRoomComponent]
})
export class DashboardComponent {

  currentPage: string = '';

  constructor(
    private titleService: Title,
    private router: Router
  ) {
    this.titleService.setTitle('Student Dashboard');

    this.currentPage = typeof this.router.url.split('#')[1] === 'undefined' ? 'createComplaint' : this.router.url.split('#')[1];
  }

  signout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.router.navigate(['/']);
  }
}
