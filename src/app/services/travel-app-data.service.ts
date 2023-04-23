import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TravelAppData } from './travel-app-data';

@Injectable({
  providedIn: 'root'
})
export class TravelAppDataService {
  public getData(tableName: string): Observable<any> {
    return of(TravelAppData[tableName]);
  }
}
