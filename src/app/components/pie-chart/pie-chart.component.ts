import {Component, Input} from '@angular/core';
import {BillingsResponse} from '../../services/billing-client.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent{
  billingResponseOutput: any;
  chartDatasets: any;
  chartLabels: any;
  chartColors: any;
  chartOptions: any;
  chartType: any;
  @Input()
  set billingResponseInput(value: BillingsResponse) {
    this.billingResponseOutput = value;
    this.chartType = 'pie';
    this.chartDatasets = [{ data: [
      this.billingResponseOutput.sumEarningsOnHand,
        this.billingResponseOutput.sumVatValue, this.billingResponseOutput.sumCitValue,
        this.billingResponseOutput.zusValue
      ], label: 'Earnings Data Set' }];
    this.chartLabels = ['Sum of EarningsOnHand', 'Sum of VatValue', 'Sum of CitValue', 'Sum of zusValue'];
    this.chartColors = [
      {
        backgroundColor: ['#F7464A', '#FDB45C', '#949FB1', '#4D5360'],
        hoverBackgroundColor: ['#FF5A5E', '#FFC870', '#A8B3C5', '#616774'],
        borderWidth: 2,
      }
    ];
    this.chartOptions = {
      responsive: true
  };
  }
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
