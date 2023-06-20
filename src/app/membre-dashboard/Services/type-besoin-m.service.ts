import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITypeBesoinM } from '../Classes/ITypeBesoinM';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeBesoinMService {

  private baseUrl = "http://localhost:8088/typesbesoins";
  
  constructor(private http: HttpClient) { }

  getTypes(): Observable<ITypeBesoinM[]> {
    return this.http.get<ITypeBesoinM[]>(this.baseUrl);
  }

  getTypeById(id: number): Observable<ITypeBesoinM> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ITypeBesoinM>(url);
  }

  createType(Type: ITypeBesoinM): Observable<ITypeBesoinM> {
    return this.http.post<ITypeBesoinM>(this.baseUrl, Type);
  }

  updateType(Type: ITypeBesoinM): Observable<any> {
    const url = `${this.baseUrl}/${Type.id}`;
    return this.http.put(url, Type);
  }

  deleteType(TypeId: number): Observable<any> {
    const url = `${this.baseUrl}/${TypeId}`;
    return this.http.delete(url);
  }
}