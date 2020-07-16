import { DataService } from './data.service';
import { Component } from '@angular/core';

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



export interface Article {
  id: number;
  href: string;
  title: string;
  date: string;
  author: string;
  category: string;
  'category-link': string;
  summary: string;
}
