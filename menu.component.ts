import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems: any[];

  constructor(private menuService: MenuService) {
    this.menuItems = [];
  }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe(
      response => {
        this.menuItems = response;
      },
      error => {
        // Handle error
      }
    );
  }
}


}

