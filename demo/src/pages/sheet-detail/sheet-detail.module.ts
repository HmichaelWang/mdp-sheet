import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SheetDetailPage } from './sheet-detail';
import { MdpSheetPageModule } from "../../shared/mdp-sheet/mdp-sheet.module";

@NgModule({
  declarations: [
    SheetDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SheetDetailPage),MdpSheetPageModule
  ],
})
export class SheetDetailPageModule {}
