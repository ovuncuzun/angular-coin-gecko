import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICoin, ICoinDetail, ICoins } from '../interfaces/coin.interface';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  private API_URL = 'https://api.coingecko.com/api/v3';

  constructor(private http: HttpClient) { }

  getCoins(): Observable<ICoin[]> {
    let params = new HttpParams().set('vs_currency', 'eur');
    return this.http.get<ICoin[]>(this.API_URL.concat('/coins/markets'), { params: params });
  }

  getCoinsById(id: string): Observable<ICoinDetail> {
    return this.http.get<ICoinDetail>(this.API_URL.concat('/coins/' + id));
  }
}
