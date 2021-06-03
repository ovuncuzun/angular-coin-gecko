import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {
  coinDetail$: Observable<any> | undefined;
  constructor(private route: ActivatedRoute, private coinService: CoinService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let coinId = params['id'];
      this.coinDetail$ = this.coinService.getCoinsById(coinId)
    });
  }
}
