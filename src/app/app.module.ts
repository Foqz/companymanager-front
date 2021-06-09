import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BillingsComponent} from './components/billings/billings.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BillingsFormComponent} from './components/billings-form/billings-form.component';
import {DataTablesModule} from 'angular-datatables';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PieChartComponent} from './components/pie-chart/pie-chart.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewBillingModalComponent } from './components/new-billing-modal/new-billing-modal.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BillingsComponent,
    BillingsFormComponent,
    PieChartComponent,
    NewBillingModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
