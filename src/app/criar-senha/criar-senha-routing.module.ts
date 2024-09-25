import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarSenhaPage } from './criar-senha.page';

const routes: Routes = [
  {
    path: '',
    component: CriarSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarSenhaPageRoutingModule {}
