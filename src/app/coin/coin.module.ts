import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CoinListComponent,
    CoinDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
  ]
})
export class CoinModule { }
