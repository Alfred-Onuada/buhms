import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-hall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-hall.component.html',
  styleUrls: ['./create-hall.component.css']
})
export class CreateHallComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Create Hall');
  }
}
