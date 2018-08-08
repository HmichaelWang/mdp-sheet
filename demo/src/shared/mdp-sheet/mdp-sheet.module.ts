import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MdpSheetPage } from './mdp-sheet';

@NgModule({
  declarations: [
    MdpSheetPage,
  ],
  imports: [
    IonicPageModule.forChild(MdpSheetPage),
  ],
  exports: [MdpSheetPage]
})
export class MdpSheetPageModule { }
