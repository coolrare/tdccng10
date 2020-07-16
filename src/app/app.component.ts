import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'TEST';

  data: any[];

  constructor(private datasvc: DataService) {
    this.data = datasvc.data;
  }

  // TEST
  doSearch(value: string): void {
    this.keyword = value;
  }
}
