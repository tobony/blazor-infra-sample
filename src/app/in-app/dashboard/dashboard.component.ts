import { Component, OnInit } from '@angular/core';
import { TravelAppDataService } from '../../services/travel-app-data.service';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public travelAppDataSelectedArticles: any = null;
  public travelAppDataDestinations: any = null;
  public northwindProducts: any = null;
  public travelAppDataImageSet1: any = null;
  public travelAppDataImageSet11: any = null;

  constructor(
    private travelAppDataService: TravelAppDataService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.travelAppDataService.getData('SelectedArticles').subscribe(data => this.travelAppDataSelectedArticles = data);
    this.travelAppDataService.getData('Destinations').subscribe(data => this.travelAppDataDestinations = data);
    this.travelAppDataService.getData('ImageSet1').subscribe(data => this.travelAppDataImageSet1 = data);
    this.travelAppDataService.getData('ImageSet1').subscribe(data => this.travelAppDataImageSet11 = data);
    this.northwindService.getData('Products').subscribe(data => this.northwindProducts = data);
  }
}
