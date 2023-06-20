import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDotProjetD } from '../classes/IDotProjetD';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DotProjetService {

  private baseUrl = "http://localhost:8088/dotprojets";
  
  constructor(private http: HttpClient) { }

  getDotProjets(): Observable<IDotProjetD[]> {
    return this.http.get<IDotProjetD[]>(this.baseUrl);
  }

  getDotProjetById(id: number): Observable<IDotProjetD> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IDotProjetD>(url);
  }

  createDotProjet(DotProjet: IDotProjetD): Observable<IDotProjetD> {
    return this.http.post<IDotProjetD>(this.baseUrl, DotProjet);
  }

  updateDotProjet(DotProjet: IDotProjetD): Observable<any> {
    const url = `${this.baseUrl}/${DotProjet.id}`;
    return this.http.put(url, DotProjet);
  }

  deleteDotProjet(membreId: number, projetId: number): Observable<any> {
    const url = `${this.baseUrl}/${membreId}/${projetId}`;
    return this.http.delete(url);
  }
  
}