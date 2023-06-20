import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProjet } from '../classes/IProjet';

@Injectable({
  providedIn: 'root'
})
export class ProjetServiceService {


  private baseUrl = "http://localhost:8088/projets";
  
  constructor(private http: HttpClient) { }

  getProjets(): Observable<IProjet[]> {
    return this.http.get<IProjet[]>(this.baseUrl);
  }

  getProjetById(id: number): Observable<IProjet> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IProjet>(url);
  }

  createProjet(Projet: IProjet): Observable<IProjet> {
    return this.http.post<IProjet>(this.baseUrl, Projet);
  }

  updateProjet(Projet: IProjet): Observable<any> {
    const url = `${this.baseUrl}/${Projet.id}`;
    return this.http.put(url, Projet);
  }

  deleteProjet(ProjetId: number): Observable<any> {
    const url = `${this.baseUrl}/${ProjetId}`;
    return this.http.delete(url);
  }
}

