import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpBesoinD } from '../classes/IExpBesoinD';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpBesoinServiceService {


  private baseUrl = "http://localhost:8088/expbesoins";
  
  constructor(private http: HttpClient) { }

  getBesoins(): Observable<IExpBesoinD[]> {
    return this.http.get<IExpBesoinD[]>(this.baseUrl);
  }

  getBesoinById(id: number): Observable<IExpBesoinD> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IExpBesoinD>(url);
  }

  createBesoin(Besoin: IExpBesoinD): Observable<IExpBesoinD> {
    return this.http.post<IExpBesoinD>(this.baseUrl, Besoin);
  }

  updateBesoin(Besoin: IExpBesoinD): Observable<any> {
    const url = `${this.baseUrl}/${Besoin.id}`;
    return this.http.put(url, Besoin);
  }

  deleteBesoin(BesoinId: number): Observable<any> {
    const url = `${this.baseUrl}/${BesoinId}`;
    return this.http.delete(url);
  }
}
