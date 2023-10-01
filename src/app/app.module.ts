import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BurgerSearchComponent } from './pages/top/burger-search/burger-search.component';
import { MenuVoicesComponent } from './pages/top/menu-voices/menu-voices.component';
import { MenuComponent } from './pages/top/menu/menu.component';
import { ArticleInfoComponent } from './layout/article-info/article-info.component';
import { SupportComponent } from './pages/support/support.component';
import { NewsComponent } from './pages/news/news.component';
import { BlogInfoComponent } from './layout/blog-info/blog-info.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BurgerSearchComponent,
    MenuVoicesComponent,
    MenuComponent,
    ArticleInfoComponent,
    SupportComponent,
    NewsComponent,
    BlogInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
