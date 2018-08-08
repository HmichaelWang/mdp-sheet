import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';

/**
 * Generated class for the SheetDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sheet-detail',
  templateUrl: 'sheet-detail.html',
})
export class SheetDetailPage {
  @ViewChild('mdpSheet') mdpSheet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SheetDetailPage');
  }

  close() {
    console.log(123456);
    setTimeout(() => {
      this.mdpSheet.close('close');
    }, 100);
  }

}
