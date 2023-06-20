import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDotationUcaRechD } from '../classes/IDotationUcaRechD';

@Injectable({
  providedIn: 'root'
})
export class DotationUcaRechServiceService {


  private baseUrl = "http://localhost:8088/dotations";
  
  constructor(private http: HttpClient) { }

  getDotations(): Observable<IDotationUcaRechD[]> {
    return this.http.get<IDotationUcaRechD[]>(this.baseUrl);
  }

  getDotationById(id: number): Observable<IDotationUcaRechD> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IDotationUcaRechD>(url);
  }

  createDotation(Dotation: IDotationUcaRechD): Observable<IDotationUcaRechD> {
    return this.http.post<IDotationUcaRechD>(this.baseUrl, Dotation);
  }

  updateDotation(Dotation: IDotationUcaRechD): Observable<any> {
    const url = `${this.baseUrl}/${Dotation.id}`;
    return this.http.put(url, Dotation);
  }

  deleteDotation(DotationId: number): Observable<any> {
    const url = `${this.baseUrl}/${DotationId}`;
    return this.http.delete(url);
  }
  
}


