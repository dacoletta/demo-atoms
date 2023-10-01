import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  // Show/Hide menu
  menuClicked(event: boolean) {
    console.log('Output ', event);
    const message = event ? 'Work in progress: Menu opened' : 'Work in progress: Menu closed';
    alert(message);
  }
}
