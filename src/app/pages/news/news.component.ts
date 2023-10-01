import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ArticleInfo } from 'src/app/model/article-info';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  news: string[] = [];
  infos: ArticleInfo[] = [];
  authors: any[] = [];
  constructor(private translate: TranslateService, private http: HttpClient) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    this.http.get('./assets/data/articles.json').subscribe((data: any) => {
      this.news = data['news'];
      this.news.forEach((newsKey: string) => {
        this.infos.push(data[newsKey]);
      });
      this.authors = data["authors"];
    });
}

}
