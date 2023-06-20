import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILaboratoire } from '../classes/ILaboratoire';
@Injectable({
  providedIn: 'root'
})
export class LaboratoiresService {

  private baseUrl = "http://localhost:8088/laboratoires";
  
  constructor(private http: HttpClient) { }

  getLaboratoires(): Observable<ILaboratoire[]> {
    return this.http.get<ILaboratoire[]>(this.baseUrl);
  }

  getLaboratoireById(id: number): Observable<ILaboratoire> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ILaboratoire>(url);
  }

  createLaboratoire(Laboratoire: ILaboratoire): Observable<ILaboratoire> {
    return this.http.post<ILaboratoire>(this.baseUrl, Laboratoire);
  }

  updateLaboratoire(Laboratoire: ILaboratoire): Observable<any> {
    const url = `${this.baseUrl}/${Laboratoire.id}`;
    return this.http.put(url, Laboratoire);
  }

  deleteLaboratoire(LaboratoireId: number): Observable<any> {
    const url = `${this.baseUrl}/${LaboratoireId}`;
    return this.http.delete(url);
  }
  
}
