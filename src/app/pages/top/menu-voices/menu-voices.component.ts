import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-voices',
  templateUrl: './menu-voices.component.html',
  styleUrls: ['./menu-voices.component.scss']
})
export class MenuVoicesComponent implements OnInit {
  menuItems: any[] = [];
  constructor(private translate: TranslateService, private http: HttpClient) {}

  ngOnInit() {
    this.populateMenu();
  }

  populateMenu() {
    this.http.get('./assets/data/menu.json').subscribe((data: any) => {
      this.menuItems = data['menuItems'];
    });
  }
}
