import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILaboratoireD } from '../classes/ILaboratoireD';
@Injectable({
  providedIn: 'root'
})
export class LaboratoiresService {

  private baseUrl = "http://localhost:8088/laboratoires";
  
  constructor(private http: HttpClient) { }

  getLaboratoires(): Observable<ILaboratoireD[]> {
    return this.http.get<ILaboratoireD[]>(this.baseUrl);
  }

  getLaboratoireById(id: number): Observable<ILaboratoireD> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ILaboratoireD>(url);
  }

  createLaboratoire(Laboratoire: ILaboratoireD): Observable<ILaboratoireD> {
    return this.http.post<ILaboratoireD>(this.baseUrl, Laboratoire);
  }

  updateLaboratoire(Laboratoire: ILaboratoireD): Observable<any> {
    const url = `${this.baseUrl}/${Laboratoire.id}`;
    return this.http.put(url, Laboratoire);
  }

  deleteLaboratoire(LaboratoireId: number): Observable<any> {
    const url = `${this.baseUrl}/${LaboratoireId}`;
    return this.http.delete(url);
  }
  
}
