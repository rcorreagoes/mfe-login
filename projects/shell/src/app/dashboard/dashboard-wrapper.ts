import { loadRemoteModule } from '@angular-architects/native-federation';
import { AfterViewInit, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dashboard-wrapper',
  standalone: true,
  template: `
    @if(loading){ Loading... }
    <ng-template #dashboard></ng-template>
  `,
  styles: [
    `
      .remote-shell {
        position: relative;
        min-height: 160px;
      }

      .spinner {
        width: 44px;
        height: 44px;
        margin: 24px auto;
        border: 4px solid #cbd5e1;
        border-top-color: #2563eb;
        border-radius: 50%;
        animation: spin 0.9s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
  //providers: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardWrapperComponent implements AfterViewInit {
  loading = true;
  @Input() logoUrl: string = 'logo.png';
  @Input() userId!: string;
  @Input() aboutItens: any[] = [];
  @Input() appName: string = '';
  @Input() menuItens: any[] = [];
  @ViewChild('dashboard', { read: ViewContainerRef, static: true }) dashboard!: ViewContainerRef;

  async ngAfterViewInit() {
    try {
      const m = await loadRemoteModule({
        // Use local dev proxy to avoid CORS when calling the hosted dashboard
        remoteEntry: '/remote-dashboard/remoteEntry.json',
        exposedModule: './Dashboard',
      });

      const component = m.Dashboard;
      const ref = this.dashboard.createComponent(component);

      ref.setInput('userId', this.userId);
      ref.setInput('aboutItens', this.aboutItens);
      ref.setInput('appName', this.appName);
      ref.setInput('menuItens', this.menuItens);
      ref.setInput('logoUrl', this.logoUrl);
    } finally {
      this.loading = false;
    }
  }
}
