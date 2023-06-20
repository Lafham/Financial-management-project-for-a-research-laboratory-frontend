import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponsableD } from '../classes/IResponsableD';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsableServiceService {

  private baseUrl = "http://localhost:8088/responsables";
  
  constructor(private http: HttpClient) { }

  getResponsables(): Observable<IResponsableD[]> {
    return this.http.get<IResponsableD[]>(this.baseUrl);
  }

  getResponsableById(id: number): Observable<IResponsableD> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IResponsableD>(url);
  }

  createResponsable(Responsable: IResponsableD): Observable<IResponsableD> {
    return this.http.post<IResponsableD>(this.baseUrl, Responsable);
  }

  updateResponsable(Responsable: IResponsableD): Observable<any> {
    const url = `${this.baseUrl}/${Responsable.id}`;
    return this.http.put(url, Responsable);
  }

  deleteResponsable(ResponsableId: number): Observable<any> {
    const url = `${this.baseUrl}/${ResponsableId}`;
    return this.http.delete(url);
  }
}
