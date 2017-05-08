import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {VideoPlayer} from "../video-player/video-player";

@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class Video {
  items: Array<{name: string, length: string, video: string, audio: string}>;
  names = ['Maha Piritha', 'Seth Pirith #1', 'Dhammachakka Suthra', 'Jaya Pirith', 'Seevali Piritha #1', 'Dajaghgha Sutta', 'Jala Nandana Piritha', 'Antharaya Niwarana Piritha', 'Rathna Malee Yanthraya', 'Jatha Manawaka Gatha', 'Angulimaala Piritha', 'Jinapanjaraya', 'Anawum Piritha', 'Wattaka Piritha', 'Dasa Disa Piritha', 'Bodhi Pooja - By Ven. Panadure Ariyadhamma Thero', 'Overnight Pirith Chanting'];
  lengths = ['60 minutes', '59 minutes', '57 minutes', '43 minutes', '6 minutes', '57 minutes', '5 minutes', '4 minutes', '5 minutes', '2 minutes', '35 minutes', '7 minutes', '4 minutes', '5 minutes', '6 minutes', '45 minutes', '7 Hours'];
  videos = ['rmBPt4yJ6Eg', 'Ld5bubCjva8', 'da8fg9k2G1w', 'o5dw5eXWUac', 'RSffmcbSIk4', '6G8p2e4f-Bc', '6BXXBwE5VjA', '9vBIYD9aiPc', 'crUZVK5FbNA', '2u8g2JTCUkw', 'IRGk817hUPo', 'EYJcss4R4dY', 'roBVNf1bCGU', 'IKR9LFrI1Ek', 'stIzTJVYwgo', '328YGhiQDiA', 'a7uwWtVa1Vs'];
  audios = ['MahaPiritha', 'SethPirith1', 'DhammaChakka1', 'JayaPiritha', 'SeevaliPiritha1', 'DajaghghaSutta', 'JalaNandanaPiritha', 'AntharayaNiwaranaPiritha', 'RathaMaleeYanthra', 'JathaManawaka_Gatha', 'AngulimaalaPiritha', 'JinapanjaraPiritha', 'AnawumPiritha', 'WattakaPiritha', 'dasa_disa_piritha', 'BodhiPooja', 'MahaPiritha'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    for(let i = 0; i < 17; i++) {
      this.items.push({
        name: this.names[i],
        length: this.lengths[i],
        video: "http://www.youtube.com/embed/"+this.videos[i]+"?enablejsapi=1&autoplay=1",
        audio: "http://pirith.org/download/"+this.audios[i]+".mp3"
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(VideoPlayer, {
      item: item
    });
  }
}
