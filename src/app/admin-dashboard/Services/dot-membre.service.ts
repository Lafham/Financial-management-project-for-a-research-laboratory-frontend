import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDotMembre } from '../classes/IDotMembre';

@Injectable({
  providedIn: 'root'
})
export class DotMembreService {

  private baseUrl = "http://localhost:8088/dotmembres";
  
  constructor(private http: HttpClient) { }

  getDotMembres(): Observable<IDotMembre[]> {
    return this.http.get<IDotMembre[]>(this.baseUrl);
  }

  getDotMembreById(id: number): Observable<IDotMembre> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IDotMembre>(url);
  }

  createDotMembre(DotMembre: IDotMembre): Observable<IDotMembre> {
    return this.http.post<IDotMembre>(this.baseUrl, DotMembre);
  }

  updateDotMembre(DotMembre: IDotMembre): Observable<any> {
    const url = `${this.baseUrl}/${DotMembre.id}`;
    return this.http.put(url, DotMembre);
  }

  deleteDotMembre(membreId: number, projetId: number): Observable<any> {
    const url = `${this.baseUrl}/${membreId}/${projetId}`;
    return this.http.delete(url);
  }
  
}