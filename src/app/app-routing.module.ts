import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { BalanceComponent } from './balance/balance.component';
import { HeaderComponent } from './master/header/header.component';
import { HomeComponent } from './master/home/home.component';
import { NRIComponent } from './nri/nri.component';
import { CarloanComponent } from './offers/carloan/carloan.component';
import { CreditcardComponent } from './offers/creditcard/creditcard.component';
import { OffersComponent } from './offers/offers.component';
import { PersonalloanComponent } from './offers/personalloan/personalloan.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'offers', component:OffersComponent},
  {path:'payment',component:PaymentComponent},
  {path:'nri',component:NRIComponent},
  {path:'balance',component:BalanceComponent},
  {path:'creditcard',component:CreditcardComponent},
  {path:'personalloan',component:PersonalloanComponent},
  {path:'carloan',component:CarloanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
