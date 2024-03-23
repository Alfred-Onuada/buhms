import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-get-students-in-hall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-students-in-hall.component.html',
  styleUrls: ['./get-students-in-hall.component.css']
})
export class GetStudentsInHallComponent {
  students: Student[] = [
    {
      id: "1",
      lastName: "Doe",
      firstName: "John",
      address: "123 Main St",
      imageUrl: "https://example.com/user1.jpg",
      isActive: true,
      matric: "123456",
      roomId: "1",
      hallId: "hall1",
      points: 100
    },
    {
      id: "2",
      lastName: "Smith",
      firstName: "Alice",
      address: "456 Elm St",
      imageUrl: "https://example.com/user2.jpg",
      isActive: false,
      matric: "654321",
      roomId: "2",
      hallId: "hall2",
      points: 50
    },
    {
      id: "3",
      lastName: "Johnson",
      firstName: "Emma",
      address: "789 Oak St",
      imageUrl: "https://example.com/user3.jpg",
      isActive: true,
      matric: "987654",
      roomId: "3",
      hallId: "hall1",
      points: 75
    },
    {
      id: "4",
      lastName: "Brown",
      firstName: "James",
      address: "321 Maple St",
      imageUrl: "https://example.com/user4.jpg",
      isActive: true,
      matric: "456789",
      roomId: "4",
      hallId: "hall2",
      points: 120
    },
    {
      id: "5",
      lastName: "Taylor",
      firstName: "Emily",
      address: "567 Pine St",
      imageUrl: "https://example.com/user5.jpg",
      isActive: false,
      matric: "789123",
      roomId: "5",
      hallId: "hall1",
      points: 90
    }
  ];
  
  constructor(private title: Title) {
    this.title.setTitle('Get Students In Hall');
  }
}
