import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@IonicPage()
@Component({
  selector: 'mdp-sheet',
  templateUrl: 'mdp-sheet.html',
  animations: [
    trigger('slideAnimation', [
      transition('* => true', [
        style({ transform: 'translateY(100%)' }),
        animate(250)
      ]),
      transition('true => false', [
        animate(100),
        style({ transform: 'translateY(100%)' })
      ])
    ])
  ]
})
export class MdpSheetPage {
  @ViewChild('parentDiv') backdrop: ElementRef;
  @ViewChild('hearder') hearder: ElementRef;
  showAnimate: boolean;
  showContent: boolean = true;
  shareData: any;
  claimType: any;
  config: any = {
    title: '明细',
    addHearder: false,
    contentHeight: '60%'
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private render: Renderer2,
    private elementRef: ElementRef
  ) {
    let datas = this.navParams.data;
    this.config = { ...this.config, ...datas };
    console.log(this.config, datas);
  }

  ngAfterViewInit() {
    this.render.setStyle(this.backdrop.nativeElement, 'height', window.innerHeight + 'px');
    this.render.setStyle(this.backdrop.nativeElement, 'width', window.innerWidth + 'px');
    this.config.addHearder && this.render.setStyle(this.hearder.nativeElement, 'height', 'calc(' + `${this.config.contentHeight}` + ' + 4.4rem)');
    this.showAnimate = true;
  }

  close(data?, e?) {
    e && e.stopPropagation();
    this.showAnimate = false;
    setTimeout(() => {
      this.showContent = false;
      this.viewCtrl.dismiss(data);
    }, 100);
  }

  //防止事件冒泡
  stop(e) {
    e.stopPropagation();
  }



}
