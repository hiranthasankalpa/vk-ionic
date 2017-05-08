import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'page-audio-player',
  templateUrl: 'audio-player.html',
})
export class AudioPlayer {

  audio: any;
  currentVideoSource: SafeResourceUrl;
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    this.selectedItem = navParams.get('item');
    this.currentVideoSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedItem.audio);
  }

  play () {
    this.audio= document.getElementById('player');
    this.audio.removeEventListener("timeupdate", this.updateProgress);
    this.audio.addEventListener("timeupdate", this.updateProgress, false);
    this.audio.play();
  }

  pause () {
    this.audio= document.getElementById('player');
    this.audio.pause();
  }

  rewind () {
    this.audio= document.getElementById('player');
    if (this.audio.currentTime > 30) {
      this.audio.currentTime -= 30.0;
    } else
      this.audio.currentTime = 0;
  }

  forward () {
    this.audio= document.getElementById('player');
    this.audio.currentTime += 30.0;
  }

  updateProgress() {
    this.audio= document.getElementById('player');
    let progress = document.getElementById("progress");
    let value = 0;
    if (this.audio != null) {
      if (this.audio.currentTime > 0) {
        value = Math.floor((100 / this.audio.duration) * this.audio.currentTime);
      }
      progress.style.width = value + "%";
      document.getElementById('curTime').innerHTML = Math.floor(this.audio.currentTime / 60) + "min, " +  Math.floor(this.audio.currentTime % 60) + "sec";
      document.getElementById('remTime').innerHTML = Math.floor((this.audio.duration-this.audio.currentTime) / 60) + "min, " +  Math.floor((this.audio.duration-this.audio.currentTime) % 60) + "sec";
    }
  }

  ionViewDidUnload() {
    this.audio.removeEventListener("timeupdate", this.updateProgress);
  }

}
