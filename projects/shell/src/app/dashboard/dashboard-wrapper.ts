import { loadRemoteModule } from '@angular-architects/native-federation';
import { AfterViewInit, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dashboard-wrapper',
  standalone: true,
  template: `<ng-template #vc></ng-template>`,
  //providers: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardWrapperComponent implements AfterViewInit {
  @Input() logoUrl: string = 'logo.png';
  @Input() userId!: string;
  @Input() aboutItens: any[] = [];
  @Input() appName: string = '';
  @Input() menuItens: any[] = [];
  @ViewChild('vc', { read: ViewContainerRef, static: true }) vc!: ViewContainerRef;

  async ngAfterViewInit() {
    const m = await loadRemoteModule({
      // Use local dev proxy to avoid CORS when calling the hosted dashboard
      remoteEntry: '/remote-dashboard/remoteEntry.json',
      exposedModule: './Dashboard',
    });

    const component = m.Dashboard;
    const ref = this.vc.createComponent(component);

    ref.setInput('userId', this.userId);
    ref.setInput('aboutItens', this.aboutItens);
    ref.setInput('appName', this.appName);
    ref.setInput('menuItens', this.menuItens);
    ref.setInput('logoUrl', this.logoUrl);
  }
}
