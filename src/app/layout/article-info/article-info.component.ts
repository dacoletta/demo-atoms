import { Component, Input } from '@angular/core';
import { ArticleInfo } from 'src/app/model/article-info';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss']
})
export class ArticleInfoComponent {
  @Input() info: ArticleInfo = {} as ArticleInfo;
}
