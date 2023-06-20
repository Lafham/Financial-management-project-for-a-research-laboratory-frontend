import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEtablissementD } from '../classes/IEtablissementD';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  private baseUrl = "http://localhost:8088/etablissements";
  
  constructor(private http: HttpClient) { }

  getEtablissements(): Observable<IEtablissementD[]> {
    return this.http.get<IEtablissementD[]>(this.baseUrl);
  }

  getEtablissementById(id: number): Observable<IEtablissementD> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IEtablissementD>(url);
  }

  createEtablissement(etablissement: IEtablissementD): Observable<IEtablissementD> {
    return this.http.post<IEtablissementD>(this.baseUrl, etablissement);
  }

  updateEtablissement(etablissement: IEtablissementD): Observable<any> {
    const url = `${this.baseUrl}/${etablissement.id}`;
    return this.http.put(url, etablissement);
  }

  deleteEtablissement(etablissementId: number): Observable<any> {
    const url = `${this.baseUrl}/${etablissementId}`;
    return this.http.delete(url);
  }
  
}
