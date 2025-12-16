import { Component } from '@angular/core';
import { About, ABOUT_MOCK, Menu, MENU_MOCK } from './dashboard-mock';
import { DashboardWrapperComponent } from './dashboard-wrapper';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardWrapperComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  aboutItens: About = ABOUT_MOCK;
  appName = 'Leaf Development';
  menuItens: Menu[] = MENU_MOCK;
  constructor() {}
}
