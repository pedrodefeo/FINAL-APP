import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescargarAppPage } from './descargar-app.page';

const routes: Routes = [
  {
    path: '',
    component: DescargarAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescargarAppPageRoutingModule {}
