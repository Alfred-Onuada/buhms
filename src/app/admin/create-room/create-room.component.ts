import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Create Room');
  }
}
