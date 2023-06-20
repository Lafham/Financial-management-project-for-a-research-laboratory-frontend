import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponsable } from '../classes/IResponsable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsableServiceService {

  private baseUrl = "http://localhost:8088/responsables";
  
  constructor(private http: HttpClient) { }

  getResponsables(): Observable<IResponsable[]> {
    return this.http.get<IResponsable[]>(this.baseUrl);
  }

  getResponsableById(id: number): Observable<IResponsable> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IResponsable>(url);
  }

  createResponsable(Responsable: IResponsable): Observable<IResponsable> {
    return this.http.post<IResponsable>(this.baseUrl, Responsable);
  }

  updateResponsable(Responsable: IResponsable): Observable<any> {
    const url = `${this.baseUrl}/${Responsable.id}`;
    return this.http.put(url, Responsable);
  }

  deleteResponsable(ResponsableId: number): Observable<any> {
    const url = `${this.baseUrl}/${ResponsableId}`;
    return this.http.delete(url);
  }
}
