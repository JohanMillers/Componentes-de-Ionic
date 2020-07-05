import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertPage } from './alert.page';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: AlertPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule,
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AlertPageRoutingModule {}
