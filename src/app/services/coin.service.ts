import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  private API_URL = 'https://api.coingecko.com/api/v3';

  constructor(private http: HttpClient) { }

  getCoins() {
    let params = new HttpParams().set('vs_currency', 'eur');
    return this.http.get(this.API_URL.concat('/coins/markets'), { params: params });
  }

  getCoinsById(id: string) {
    return this.http.get(this.API_URL.concat('/coins/' + id));
  }
}
