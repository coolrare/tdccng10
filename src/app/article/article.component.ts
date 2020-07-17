import { Article } from '../Article';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() item: Article;

  @Input() i = 0;

  @Output() delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  doDelete(): void {
    this.delete.emit(this.item.id);
  }

}
