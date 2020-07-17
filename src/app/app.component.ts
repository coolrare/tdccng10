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
    datasvc.load()
      .subscribe(result => {
        this.data = result;
      });
  }

  // TEST
  doSearch(value: string): void {
    this.keyword = value;
  }
}
