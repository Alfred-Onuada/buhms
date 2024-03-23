import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Hall } from 'src/app/interfaces/hall';

@Component({
  selector: 'app-get-halls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-halls.component.html',
  styleUrls: ['./get-halls.component.css']
})
export class GetHallsComponent {
  halls: Hall[] = [
    {
      "id": "hall1",
      "name": "Hall 1",
      "description": "Description for Hall 1",
      "type": "Regular",
      "gender": "Female",
      "numberOfRooms": 7
    },
    {
      "id": "hall2",
      "name": "Hall 2",
      "description": "Description for Hall 2",
      "type": "Premium",
      "gender": "Male",
      "numberOfRooms": 9
    },
    {
      "id": "hall3",
      "name": "Hall 3",
      "description": "Description for Hall 3",
      "type": "Regular",
      "gender": "Female",
      "numberOfRooms": 4
    },
    {
      "id": "hall4",
      "name": "Hall 4",
      "description": "Description for Hall 4",
      "type": "Premium",
      "gender": "Male",
      "numberOfRooms": 8
    },
    {
      "id": "hall5",
      "name": "Hall 5",
      "description": "Description for Hall 5",
      "type": "Regular",
      "gender": "Female",
      "numberOfRooms": 10
    }
  ]
  
  constructor(private titleService: Title) {
    this.titleService.setTitle('Get Halls');
  }
}
