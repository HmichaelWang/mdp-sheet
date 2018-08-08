
# 仿ios原生ActionSheet

 独立于内容组件之外的纯actionSheet壳子，你可以将任何合适的内容、组件放进actionSheet中展示。

 使用：

  IOS使用需要安装web-animatios-js来确保动画的运行，接着在app目录下的main.ts中引入：
  import "web-animations-js/web-animations.min";
  
  组件是在popover组件的基础上进行二次封装的，初始化方法和popoverController一致：
 ```typescript
 const config = {addHearder: true, title: 'sheet', contentHeight: '60%'}
 popoverController.create('PageName', config, { cssClass: 'custom-popover' }).present();
 ```
  * config.addHearder：是否添加actionSheet头部bar，bar内容包括描述title以及关闭按钮，默认不显示
  * config.title：bar-title内容
  * config.contentHeight：内容显示最大高度，超出部分将滚动显示，默认最大高度当前页面60%（不包括bar高度）
  * PageName：需要放入mdp-sheet中展示的自定义组件，在该页面中引入mdp-sheet.module文件,需要传入的组件HTML代码由标签<mdp-sheet>包含。
  * cssClass：固定样式，修改popover自带属性
  
  

## 在你的模块中使用
app.module.ts文件
引入BrowserAnimationsModule模块，该模块的引入必须在BrowserModule之前
```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
...
@NgModule({
    ...
    imports:[
    ...
    BrowserAnimationsModule
    ]
})
```

test页面初始化使用
test.ts文件
```typescript
  let popDetail = this.popoverCtrl.create('SheetDetailPage', { }, { cssClass: 'custom-popover' });
      popDetail.present();
      popDetail.onDidDismiss(res => {
        ...
      })
```

sheet-detail.html文件
```html
  <mdp-sheet #mdpSheet>
      <ion-list>
        <ion-item>1</ion-item>
        <ion-item>2</ion-item>
        <ion-item (click)="close($event)">close</ion-item>
      </ion-list>
  </mdp-sheet>
```

sheet-detail.module.ts文件
```typescript
import { MdpSheetPageModule } from "../../shared/mdp-sheet/mdp-sheet.module";
@NgModule({
...
imports: [
    MdpSheetPageModule
  ],
})
```

sheet-detail.ts文件
```typescript
@ViewChild('mdpSheet') mdpSheet: any;
...
close() {
  this.mdpSheet.close({a:'A',b:'B'});
}
```

