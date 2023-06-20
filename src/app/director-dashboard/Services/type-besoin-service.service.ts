import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITypeBesoinD } from '../classes/ITypeBesoinD';

@Injectable({
  providedIn: 'root'
})
export class TypeBesoinServiceService {


  private baseUrl = "http://localhost:8088/typesbesoins";
  
  constructor(private http: HttpClient) { }

  getTypes(): Observable<ITypeBesoinD[]> {
    return this.http.get<ITypeBesoinD[]>(this.baseUrl);
  }

  getTypeById(id: number): Observable<ITypeBesoinD> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ITypeBesoinD>(url);
  }

  createType(Type: ITypeBesoinD): Observable<ITypeBesoinD> {
    return this.http.post<ITypeBesoinD>(this.baseUrl, Type);
  }

  updateType(Type: ITypeBesoinD): Observable<any> {
    const url = `${this.baseUrl}/${Type.id}`;
    return this.http.put(url, Type);
  }

  deleteType(TypeId: number): Observable<any> {
    const url = `${this.baseUrl}/${TypeId}`;
    return this.http.delete(url);
  }
}
