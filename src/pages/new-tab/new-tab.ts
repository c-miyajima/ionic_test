import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the NewTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-tab',
  templateUrl: 'new-tab.html'
})
export class NewTabPage {

  test1Root = 'Test1Page'
  test2Root = 'Test2Page'
  test3Root = 'Test3Page'


  constructor(public navCtrl: NavController) {}

}
