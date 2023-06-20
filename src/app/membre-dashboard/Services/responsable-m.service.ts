import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponsableM } from '../Classes/IResponsableM';

@Injectable({
  providedIn: 'root'
})
export class ResponsableMService {

  private baseUrl = "http://localhost:8088/responsables";
  
  constructor(private http: HttpClient) { }

  getResponsables(): Observable<IResponsableM[]> {
    return this.http.get<IResponsableM[]>(this.baseUrl);
  }

  getResponsableById(id: number): Observable<IResponsableM> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IResponsableM>(url);
  }

  createResponsable(Responsable: IResponsableM): Observable<IResponsableM> {
    return this.http.post<IResponsableM>(this.baseUrl, Responsable);
  }

  updateResponsable(Responsable: IResponsableM): Observable<any> {
    const url = `${this.baseUrl}/${Responsable.id}`;
    return this.http.put(url, Responsable);
  }

  deleteResponsable(ResponsableId: number): Observable<any> {
    const url = `${this.baseUrl}/${ResponsableId}`;
    return this.http.delete(url);
  }
}
