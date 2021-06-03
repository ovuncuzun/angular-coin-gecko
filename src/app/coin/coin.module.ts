import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';

@NgModule({
  declarations: [
    CoinListComponent,
    CoinDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoinModule { }
