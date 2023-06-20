import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from '../classes/IAdmin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseUrl = "http://localhost:8088/admin";
  
  constructor(private http: HttpClient) { }

  getAdmins(): Observable<IAdmin[]> {
    return this.http.get<IAdmin[]>(this.baseUrl);
  }

  
}
