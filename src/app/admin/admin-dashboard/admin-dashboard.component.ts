import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from "../../header/header.component";

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css'],
    imports: [CommonModule, HeaderComponent]
})
export class AdminDashboardComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Admin Dashboard');
  }
}
