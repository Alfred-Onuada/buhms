import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from "../../header/header.component";

@Component({
    selector: 'app-register-admin',
    standalone: true,
    templateUrl: './register-admin.component.html',
    styleUrls: ['./register-admin.component.css'],
    imports: [CommonModule, HeaderComponent]
})
export class RegisterAdminComponent {
  title = 'Register Admin';

  constructor(private titleService: Title) {
    titleService.setTitle(this.title);
  }
}
