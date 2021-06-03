import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailComponent } from './coin/coin-detail/coin-detail.component';
import { CoinListComponent } from './coin/coin-list/coin-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/coins', pathMatch: 'full' },
  { path: 'coins', component: CoinListComponent },
  { path: 'coins/:id', component: CoinDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
