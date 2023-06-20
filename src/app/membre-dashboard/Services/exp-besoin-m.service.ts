import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpBesoinM } from '../Classes/IExpBesoinM';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpBesoinMService {

  private baseUrl = "http://localhost:8088/expbesoins";
  
  constructor(private http: HttpClient) { }

  getBesoins(): Observable<IExpBesoinM[]> {
    return this.http.get<IExpBesoinM[]>(this.baseUrl);
  }

  getBesoinById(id: number): Observable<IExpBesoinM> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IExpBesoinM>(url);
  }

  createBesoin(Besoin: IExpBesoinM): Observable<IExpBesoinM> {
    return this.http.post<IExpBesoinM>(this.baseUrl, Besoin);
  }

  updateBesoin(Besoin: IExpBesoinM): Observable<any> {
    const url = `${this.baseUrl}/${Besoin.id}`;
    return this.http.put(url, Besoin);
  }

  deleteBesoin(BesoinId: number): Observable<any> {
    const url = `${this.baseUrl}/${BesoinId}`;
    return this.http.delete(url);
  }
}