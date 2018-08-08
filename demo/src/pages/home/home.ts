import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) {

  }

  showSheet(id) {
    if (id) {
      this.popoverCtrl.create('MdpSheetPage', { addHearder: true }, { cssClass: 'custom-popover' }).present();
    } else {
      let popDetail = this.popoverCtrl.create('SheetDetailPage', { }, { cssClass: 'custom-popover' });
      popDetail.present();
      popDetail.onDidDismiss(res => {
        console.log(res,333);
      })
    }
  }

}
