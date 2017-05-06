import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Resources} from "../resources/resources";
import {About} from "../about/about";
import {Audio} from "../audio/audio";
import {Video} from "../video/video";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

  showVideoPage() {
    this.navCtrl.push(Video);
  }

  showAudioPage() {
    this.navCtrl.push(Audio);
  }

  showAboutPage() {
    this.navCtrl.push(About);
  }

  showResourcesPage() {
    this.navCtrl.push(Resources);
  }

}
