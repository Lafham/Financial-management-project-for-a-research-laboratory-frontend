import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDotMembreD } from '../classes/IDotMembreD';

@Injectable({
  providedIn: 'root'
})
export class DotMembreService {

  private baseUrl = "http://localhost:8088/dotmembres";
  
  constructor(private http: HttpClient) { }

  getDotMembres(): Observable<IDotMembreD[]> {
    return this.http.get<IDotMembreD[]>(this.baseUrl);
  }

  getDotMembreById(id: number): Observable<IDotMembreD> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IDotMembreD>(url);
  }

  createDotMembre(DotMembre: IDotMembreD): Observable<IDotMembreD> {
    return this.http.post<IDotMembreD>(this.baseUrl, DotMembre);
  }

  updateDotMembre(DotMembre: IDotMembreD): Observable<any> {
    const url = `${this.baseUrl}/${DotMembre.id}`;
    return this.http.put(url, DotMembre);
  }

  deleteDotMembre(membreId: number, projetId: number): Observable<any> {
    const url = `${this.baseUrl}/${membreId}/${projetId}`;
    return this.http.delete(url);
  }
  
}