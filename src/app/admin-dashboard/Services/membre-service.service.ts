import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMembre } from '../classes/IMembre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  private baseUrl = "http://localhost:8088/membres";
  
  constructor(private http: HttpClient) { }

  getMembres(): Observable<IMembre[]> {
    return this.http.get<IMembre[]>(this.baseUrl);
  }

  getMembreById(id: number): Observable<IMembre> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IMembre>(url);
  }

  createMembre(Membre: IMembre): Observable<IMembre> {
    return this.http.post<IMembre>(this.baseUrl, Membre);
  }

  updateMembre(Membre: IMembre): Observable<any> {
    const url = `${this.baseUrl}/${Membre.id}`;
    return this.http.put(url, Membre);
  }

  deleteMembre(MembreId: number): Observable<any> {
    const url = `${this.baseUrl}/${MembreId}`;
    return this.http.delete(url);
  }
  
}
