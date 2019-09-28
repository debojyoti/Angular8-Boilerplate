import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DefaultPageComponent],
  imports: [
  CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
