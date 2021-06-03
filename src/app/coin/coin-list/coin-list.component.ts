import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  coins!: MatTableDataSource<any>;
  columnsToDisplay: String[] = ['rank', 'name', 'current_price', 'high_24h', 'low_24h'];

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService.getCoins().subscribe((data: any) => {
      this.coins = new MatTableDataSource(data);
      this.coins.paginator = this.paginator;
    });
  }
}
