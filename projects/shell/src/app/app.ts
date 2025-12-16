import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MENU_MOCK } from './dashboard/dashboard-mock';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('shell');

  constructor(private router: Router) {}

  ngOnInit(): void {
    window.addEventListener('mfeLoginOk', () => this.loadDashboard());
  }

  loadDashboard() {
    this.router.navigate(['/dashboard']);

    const handler = () => {
      window.dispatchEvent(
        new CustomEvent('getDashboardValues', {
          detail: {
            appName: 'Dashboard Shell',
            menuItens: MENU_MOCK,
            username: 'Rodrigo',
          },
        })
      );
      window.removeEventListener('mfeDashboardReady', handler);
    };

    window.addEventListener('mfeDashboardReady', handler);
  }
}
