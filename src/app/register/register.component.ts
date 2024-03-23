import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    imports: [CommonModule, HeaderComponent]
})
export class RegisterComponent {
  title = 'Register';

  constructor(private titleService: Title) {
    titleService.setTitle(this.title);
  }
}
