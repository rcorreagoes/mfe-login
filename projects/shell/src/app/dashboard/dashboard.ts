import { Component } from '@angular/core';
import { ABOUT_MOCK, MENU_MOCK } from './dashboard-mock';
import { DashboardWrapperComponent } from './dashboard-wrapper';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardWrapperComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  aboutItens: any = ABOUT_MOCK;
  appName = 'Leaf Development';
  menuItens: any[] = MENU_MOCK;
  constructor() {}
}
