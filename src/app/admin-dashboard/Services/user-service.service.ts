import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../classes/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "http://localhost:8088/users";
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl);
  }

  getUserById(id: number): Observable<IUser> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IUser>(url);
  }

  createUser(User: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.baseUrl, User);
  }

  updateUser(User: IUser): Observable<any> {
    const url = `${this.baseUrl}/${User.id}`;
    return this.http.put(url, User);
  }

  deleteUser(UserId: number): Observable<any> {
    const url = `${this.baseUrl}/${UserId}`;
    return this.http.delete(url);
  }
  
}
