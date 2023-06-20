import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserD } from '../classes/IUserD';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "http://localhost:8088/users";
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUserD[]> {
    return this.http.get<IUserD[]>(this.baseUrl);
  }

  getUserById(id: number): Observable<IUserD> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IUserD>(url);
  }

  createUser(User: IUserD): Observable<IUserD> {
    return this.http.post<IUserD>(this.baseUrl, User);
  }

  updateUser(User: IUserD): Observable<any> {
    const url = `${this.baseUrl}/${User.id}`;
    return this.http.put(url, User);
  }

  deleteUser(UserId: number): Observable<any> {
    const url = `${this.baseUrl}/${UserId}`;
    return this.http.delete(url);
  }
  
}
