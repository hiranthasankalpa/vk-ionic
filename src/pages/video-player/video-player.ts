import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html',
})
export class VideoPlayer {

  currentVideoSource: SafeResourceUrl;
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    this.selectedItem = navParams.get('item');
    this.currentVideoSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedItem.video);
  }

}
