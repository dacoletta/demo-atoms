import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-burger-search',
  templateUrl: './burger-search.component.html',
  styleUrls: ['./burger-search.component.scss']
})
export class BurgerSearchComponent {
  opened: boolean = false;
  @Output() menuClicked: EventEmitter<boolean> = new EventEmitter();

  openMenu() {
    this.opened = !this.opened;
    console.log('Menu opened', this.opened);
    this.menuClicked.emit(this.opened);
  }
}
