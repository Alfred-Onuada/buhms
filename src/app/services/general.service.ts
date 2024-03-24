import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiResponse, GetHallsResponse } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor(private http: HttpClient) {}

  createHall(data: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${env.apiUrl}/Hall/createHall`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      }
    });
  }

  getHalls(): Observable<GetHallsResponse> {
    return this.http.get<GetHallsResponse>(`${env.apiUrl}/Hall/GetHalls`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      }
    });
  }
}