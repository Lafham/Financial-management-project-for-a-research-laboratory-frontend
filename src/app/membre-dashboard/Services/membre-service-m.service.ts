import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMembreM } from '../Classes/IMembreM';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembreServiceMService {

  private baseUrl = "http://localhost:8088/membres";
  
  constructor(private http: HttpClient) { }

  getMembres(): Observable<IMembreM[]> {
    return this.http.get<IMembreM[]>(this.baseUrl);
  }

  getMembreById(id: number): Observable<IMembreM> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IMembreM>(url);
  }

  createMembre(Membre: IMembreM): Observable<IMembreM> {
    return this.http.post<IMembreM>(this.baseUrl, Membre);
  }

  updateMembre(Membre: IMembreM): Observable<any> {
    const url = `${this.baseUrl}/${Membre.id}`;
    return this.http.put(url, Membre);
  }

  deleteMembre(MembreId: number): Observable<any> {
    const url = `${this.baseUrl}/${MembreId}`;
    return this.http.delete(url);
  }
  
}
