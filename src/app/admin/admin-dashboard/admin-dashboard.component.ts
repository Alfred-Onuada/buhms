import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from "../../header/header.component";
import { Router } from '@angular/router';
import { CreateHallComponent } from "../create-hall/create-hall.component";
import { CreateRoomComponent } from "../create-room/create-room.component";
import { GetComplaintsHallComponent } from "../get-complaints-hall/get-complaints-hall.component";
import { GetComplaintsRoomComponent } from "../get-complaints-room/get-complaints-room.component";
import { GetHallsComponent } from "../get-halls/get-halls.component";
import { GetRoomsComponent } from "../get-rooms/get-rooms.component";
import { GetStudentsInHallComponent } from "../get-students-in-hall/get-students-in-hall.component";
import { RegisterAdminComponent } from "../register-admin/register-admin.component";

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css'],
    imports: [CommonModule, HeaderComponent, CreateHallComponent, CreateRoomComponent, GetComplaintsHallComponent, GetComplaintsRoomComponent, GetHallsComponent, GetRoomsComponent, GetStudentsInHallComponent, RegisterAdminComponent]
})
export class AdminDashboardComponent {
  currentPage: string = '';

  constructor(
    private titleService: Title,
    private router: Router
  ) {
    this.titleService.setTitle('Admin Dashboard');

    this.currentPage = typeof this.router.url.split('#')[1] === 'undefined' ? 'createHall' : this.router.url.split('#')[1];
  }

  signout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.router.navigate(['/admin']);
  }
}
