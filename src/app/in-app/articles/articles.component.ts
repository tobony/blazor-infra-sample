import { Component, OnInit } from '@angular/core';
import { TravelAppDataService } from '../../services/travel-app-data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public travelAppDataSelectedArticles: any = null;
  public travelAppDataSelectedArticles1: any = null;
  public travelAppDataSelectedArticles2: any = null;
  public travelAppDataSelectedArticles3: any = null;
  public travelAppDataSelectedArticles4: any = null;

  constructor(
    private travelAppDataService: TravelAppDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.travelAppDataService.getData('SelectedArticles').subscribe(data => this.travelAppDataSelectedArticles = data);
    this.travelAppDataService.getData('SelectedArticles').subscribe(data => this.travelAppDataSelectedArticles1 = data);
    this.travelAppDataService.getData('SelectedArticles').subscribe(data => this.travelAppDataSelectedArticles2 = data);
    this.travelAppDataService.getData('SelectedArticles').subscribe(data => this.travelAppDataSelectedArticles3 = data);
    this.travelAppDataService.getData('SelectedArticles').subscribe(data => this.travelAppDataSelectedArticles4 = data);
  }
}
