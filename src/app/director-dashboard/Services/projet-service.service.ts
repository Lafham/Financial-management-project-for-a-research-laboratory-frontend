import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProjetD } from '../classes/IProjetD';

@Injectable({
  providedIn: 'root'
})
export class ProjetServiceService {


  private baseUrl = "http://localhost:8088/projets";
  
  constructor(private http: HttpClient) { }

  getProjets(): Observable<IProjetD[]> {
    return this.http.get<IProjetD[]>(this.baseUrl);
  }

  getProjetById(id: number): Observable<IProjetD> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IProjetD>(url);
  }

  createProjet(Projet: IProjetD): Observable<IProjetD> {
    return this.http.post<IProjetD>(this.baseUrl, Projet);
  }

  updateProjet(Projet: IProjetD): Observable<any> {
    const url = `${this.baseUrl}/${Projet.id}`;
    return this.http.put(url, Projet);
  }

  deleteProjet(ProjetId: number): Observable<any> {
    const url = `${this.baseUrl}/${ProjetId}`;
    return this.http.delete(url);
  }
}

