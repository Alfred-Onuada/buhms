import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Hall } from 'src/app/interfaces/hall';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-get-halls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-halls.component.html',
  styleUrls: ['./get-halls.component.css']
})
export class GetHallsComponent implements OnInit {
  halls: Hall[] = []
  
  constructor(
    private titleService: Title,
    private generalService: GeneralService
  ) {
    this.titleService.setTitle('Get Halls');
  }

  ngOnInit(): void {
    this.generalService.getHalls().subscribe((response) => {
      if (response.status) {
        this.halls = response.data;
      }
    });
  }
}
