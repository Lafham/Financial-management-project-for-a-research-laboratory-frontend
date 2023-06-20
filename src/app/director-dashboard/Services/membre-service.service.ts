import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMembreD } from '../classes/IMembreD';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  private baseUrl = "http://localhost:8088/membres";
  
  constructor(private http: HttpClient) { }

  getMembres(): Observable<IMembreD[]> {
    return this.http.get<IMembreD[]>(this.baseUrl);
  }

  getMembreById(id: number): Observable<IMembreD> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IMembreD>(url);
  }

  createMembre(Membre: IMembreD): Observable<IMembreD> {
    return this.http.post<IMembreD>(this.baseUrl, Membre);
  }

  updateMembre(Membre: IMembreD): Observable<any> {
    const url = `${this.baseUrl}/${Membre.id}`;
    return this.http.put(url, Membre);
  }

  deleteMembre(MembreId: number): Observable<any> {
    const url = `${this.baseUrl}/${MembreId}`;
    return this.http.delete(url);
  }
  
}
