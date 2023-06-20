import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDotProjet } from '../classes/IDotProjet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DotProjetService {

  private baseUrl = "http://localhost:8088/dotprojets";
  
  constructor(private http: HttpClient) { }

  getDotProjets(): Observable<IDotProjet[]> {
    return this.http.get<IDotProjet[]>(this.baseUrl);
  }

  getDotProjetById(id: number): Observable<IDotProjet> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IDotProjet>(url);
  }

  createDotProjet(DotProjet: IDotProjet): Observable<IDotProjet> {
    return this.http.post<IDotProjet>(this.baseUrl, DotProjet);
  }

  updateDotProjet(DotProjet: IDotProjet): Observable<any> {
    const url = `${this.baseUrl}/${DotProjet.id}`;
    return this.http.put(url, DotProjet);
  }

  deleteDotProjet(membreId: number, projetId: number): Observable<any> {
    const url = `${this.baseUrl}/${membreId}/${projetId}`;
    return this.http.delete(url);
  }
  
}