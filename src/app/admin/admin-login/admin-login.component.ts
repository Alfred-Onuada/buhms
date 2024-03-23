import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from "../../header/header.component";

@Component({
    selector: 'app-admin-login',
    standalone: true,
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.css'],
    imports: [CommonModule, HeaderComponent]
})
export class AdminLoginComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Admin Login');
  }
}
