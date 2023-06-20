import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDotationUcaRech } from '../classes/IDotationUcaRech';

@Injectable({
  providedIn: 'root'
})
export class DotationUcaRechServiceService {


  private baseUrl = "http://localhost:8088/dotations";
  
  constructor(private http: HttpClient) { }

  getDotations(): Observable<IDotationUcaRech[]> {
    return this.http.get<IDotationUcaRech[]>(this.baseUrl);
  }

  getDotationById(id: number): Observable<IDotationUcaRech> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IDotationUcaRech>(url);
  }

  createDotation(Dotation: IDotationUcaRech): Observable<IDotationUcaRech> {
    return this.http.post<IDotationUcaRech>(this.baseUrl, Dotation);
  }

  updateDotation(Dotation: IDotationUcaRech): Observable<any> {
    const url = `${this.baseUrl}/${Dotation.id}`;
    return this.http.put(url, Dotation);
  }

  deleteDotation(DotationId: number): Observable<any> {
    const url = `${this.baseUrl}/${DotationId}`;
    return this.http.delete(url);
  }
  
}


