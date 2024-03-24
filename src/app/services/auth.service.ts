import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../interfaces/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  adminRegister(data: any): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(env.apiUrl + '/Auth/registerAdmin', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  login(data: any): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(env.apiUrl + '/Auth/login', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  userRegister(data: any): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(env.apiUrl + '/Auth/register', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
