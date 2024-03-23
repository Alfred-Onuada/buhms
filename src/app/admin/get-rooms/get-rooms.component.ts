import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Room } from 'src/app/interfaces/room';

@Component({
  selector: 'app-get-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-rooms.component.html',
  styleUrls: ['./get-rooms.component.css']
})
export class GetRoomsComponent {
  rooms: Room[] = [
    {
      id: "1",
      roomNumber: "Room 101",
      numberAvailable: 2,
      numberOfBeds: 3,
      isOccupied: true,
      hallId: "hall1",
      users: [
        {
          id: "1",
          lastName: "Doe",
          firstName: "John",
          imageUrl: "https://example.com/image.jpg",
          matric: "123456"
        },
        {
          id: "2",
          lastName: "Smith",
          firstName: "Alice",
          imageUrl: "https://example.com/image.jpg",
          matric: "654321"
        }
      ]
    },
    {
      id: "2",
      roomNumber: "Room 102",
      numberAvailable: 1,
      numberOfBeds: 2,
      isOccupied: false,
      hallId: "hall1",
      users: []
    },
    {
      id: "3",
      roomNumber: "Room 201",
      numberAvailable: 3,
      numberOfBeds: 4,
      isOccupied: false,
      hallId: "hall2",
      users: []
    },
    {
      id: "4",
      roomNumber: "Room 202",
      numberAvailable: 2,
      numberOfBeds: 2,
      isOccupied: true,
      hallId: "hall2",
      users: [
        {
          id: "3",
          lastName: "Johnson",
          firstName: "Emma",
          imageUrl: "https://example.com/image.jpg",
          matric: "987654"
        }
      ]
    },
    {
      id: "5",
      roomNumber: "Room 103",
      numberAvailable: 0,
      numberOfBeds: 1,
      isOccupied: true,
      hallId: "hall1",
      users: [
        {
          id: "4",
          lastName: "Brown",
          firstName: "James",
          imageUrl: "https://example.com/image.jpg",
          matric: "456789"
        }
      ]
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Get Rooms');
  }
}
