import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, HeaderComponent]
})
export class HomeComponent {
    // change the title to Babcock University Hostel Management System
    title = 'Babcock University Hostel Management System';

    constructor(private titleService: Title) {
        titleService.setTitle(this.title);
    }
}
