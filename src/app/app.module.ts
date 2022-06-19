import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';
import { LoginComponent } from './admin/login/login.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { HomeComponent } from './master/home/home.component';
import { OffersComponent } from './offers/offers.component';
import { PaymentComponent } from './payment/payment.component';
import { BalanceComponent } from './balance/balance.component';
import { NRIComponent } from './nri/nri.component';
import { CreditcardComponent } from './offers/creditcard/creditcard.component';
import { PersonalloanComponent } from './offers/personalloan/personalloan.component';
import { CarloanComponent } from './offers/carloan/carloan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    OffersComponent,
    PaymentComponent,
    BalanceComponent,
    NRIComponent,
    CreditcardComponent,
    PersonalloanComponent,
    CarloanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
