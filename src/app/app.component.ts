import { DataService } from './data.service';
import { Component } from '@angular/core';
import { Article } from './Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'TEST';

  data: Article[];

  constructor(private datasvc: DataService) {
    this.data = datasvc.data;
  }

  // TEST
  doSearch(value: string): void {
    this.keyword = value;
  }
}
