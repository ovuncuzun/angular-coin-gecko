import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ICoins } from 'src/app/interfaces/coin.interface';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  coins!: MatTableDataSource<ICoins>;
  columnsToDisplay: String[] = ['rank', 'name', 'current_price', 'high_24h', 'low_24h'];

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService.getCoins().subscribe((data: ICoins[]) => {
      debugger;
      this.coins = new MatTableDataSource<ICoins>(data);
      this.coins.paginator = this.paginator;
    });
  }
}
