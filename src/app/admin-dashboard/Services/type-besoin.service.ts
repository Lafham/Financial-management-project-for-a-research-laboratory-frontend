import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITypeBesoin } from '../classes/ITypeBesoin';

@Injectable({
  providedIn: 'root'
})
export class TypeBesoinService {

 
  private baseUrl = "http://localhost:8088/typesbesoins";
  
  constructor(private http: HttpClient) { }

  getTypes(): Observable<ITypeBesoin[]> {
    return this.http.get<ITypeBesoin[]>(this.baseUrl);
  }

  getTypeById(id: number): Observable<ITypeBesoin> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ITypeBesoin>(url);
  }

  createType(Type: ITypeBesoin): Observable<ITypeBesoin> {
    return this.http.post<ITypeBesoin>(this.baseUrl, Type);
  }

  updateType(Type: ITypeBesoin): Observable<any> {
    const url = `${this.baseUrl}/${Type.id}`;
    return this.http.put(url, Type);
  }

  deleteType(TypeId: number): Observable<any> {
    const url = `${this.baseUrl}/${TypeId}`;
    return this.http.delete(url);
  }
}
