import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Complaint } from 'src/app/interfaces/complaint';

@Component({
  selector: 'app-get-complaints-hall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-complaints-hall.component.html',
  styleUrls: ['./get-complaints-hall.component.css']
})
export class GetComplaintsHallComponent {
  complaints: Complaint[] = [
    {
      id: "1",
      title: "Broken Chair",
      description: "The chair in room 101 is broken and needs repair.",
      type: "Furniture",
      isFixed: false,
      roomId: "101",
      studentId: "student1"
    },
    {
      id: "2",
      title: "Leaking Faucet",
      description: "The faucet in room 102 is leaking and needs to be fixed.",
      type: "Plumbing",
      isFixed: false,
      roomId: "102",
      studentId: "student2"
    },
    {
      id: "3",
      title: "Broken Window",
      description: "The window in room 103 is broken and needs replacement.",
      type: "Maintenance",
      isFixed: true,
      roomId: "103",
      studentId: "student3"
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Get Complaints Hall');
  }
}
