import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-atoms';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.setDefaultLang('it-IT');
    this.translate.use('it-IT');
  }
}
