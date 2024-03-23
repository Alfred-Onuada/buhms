import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [CommonModule, HeaderComponent]
})
export class LoginComponent {
    // set the title to Login
    title = 'Login';

    constructor(private titleService: Title) {
        titleService.setTitle(this.title);
    }
}
