import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiResponse, GetComplaintsResponse, GetHallsResponse, GetRoomsResponse, GetStudentsResponse, fixComplaintResponse } from '../interfaces/response';

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

  createRoom(data: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${env.apiUrl}/Hall/createRoom?HallId=${data.hallId}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      }
    });
  }

  getRooms(hallId: string): Observable<GetRoomsResponse> {
    return this.http.get<GetRoomsResponse>(`${env.apiUrl}/Hall/${hallId}/GetRooms`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      }
    });
  }

  getComplaints(hallId: string): Observable<GetComplaintsResponse> {
    return this.http.get<GetComplaintsResponse>(`${env.apiUrl}/Hall/GetAllComplaints/${hallId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      }
    });
  };

  fixComplaint(complaintId: string): Observable<fixComplaintResponse> {
    return this.http.get<fixComplaintResponse>(`${env.apiUrl}/Hall/fixComplaint/${complaintId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      }
    });
  }

  getComplaintsRoom(roomId: string): Observable<GetComplaintsResponse> {
    return this.http.get<GetComplaintsResponse>(`${env.apiUrl}/Hall/GetComplaints/${roomId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      }
    });
  }

  getStudentsInHall(hallId: string): Observable<GetStudentsResponse> {
    return this.http.get<GetStudentsResponse>(`${env.apiUrl}/Hall/GetStudents/${hallId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      }
    });
  }
}