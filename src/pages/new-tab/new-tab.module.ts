import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTabPage } from './new-tab';

@NgModule({
  declarations: [
    NewTabPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTabPage),
  ]
})
export class NewTabPageModule {}
