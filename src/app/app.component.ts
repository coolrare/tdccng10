import { DataService } from './data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from './Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  keyword = 'TEST';

  data: Article[];

  constructor(private datasvc: DataService) { }

  ngOnInit(): void {
    this.datasvc.load()
      .subscribe(result => {
        this.data = result;
      });
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
  }

  // TEST
  doSearch(value: string): void {
    this.keyword = value;
  }

  removeArticle(id: number): void {
    console.log(`Removing article ${id}`);
  }
}
