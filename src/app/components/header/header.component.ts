import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeTab: string = 'home';

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
}
