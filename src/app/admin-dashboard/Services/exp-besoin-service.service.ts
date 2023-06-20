import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpBesoin } from '../classes/IExpBesoin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpBesoinServiceService {


  private baseUrl = "http://localhost:8088/expbesoins";
  
  constructor(private http: HttpClient) { }

  getBesoins(): Observable<IExpBesoin[]> {
    return this.http.get<IExpBesoin[]>(this.baseUrl);
  }

  getBesoinById(id: number): Observable<IExpBesoin> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IExpBesoin>(url);
  }

  createBesoin(Besoin: IExpBesoin): Observable<IExpBesoin> {
    return this.http.post<IExpBesoin>(this.baseUrl, Besoin);
  }

  updateBesoin(Besoin: IExpBesoin): Observable<any> {
    const url = `${this.baseUrl}/${Besoin.id}`;
    return this.http.put(url, Besoin);
  }

  deleteBesoin(BesoinId: number): Observable<any> {
    const url = `${this.baseUrl}/${BesoinId}`;
    return this.http.delete(url);
  }
}
