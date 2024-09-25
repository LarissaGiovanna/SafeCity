import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarSenhaPageRoutingModule } from './criar-senha-routing.module';

import { CriarSenhaPage } from './criar-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarSenhaPageRoutingModule
  ],
  declarations: [CriarSenhaPage]
})
export class CriarSenhaPageModule {}
