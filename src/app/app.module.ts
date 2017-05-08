import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Home} from "../pages/home/home";
import {Video} from "../pages/video/video";
import {Resources} from "../pages/resources/resources";
import {Audio} from "../pages/audio/audio";
import {About} from "../pages/about/about";
import {VideoPlayer} from "../pages/video-player/video-player";
import {AudioPlayer} from "../pages/audio-player/audio-player";

@NgModule({
  declarations: [
    MyApp,
    Home,
    Video,
    Resources,
    Audio,
    About,
    VideoPlayer,
    AudioPlayer
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Video,
    Resources,
    Audio,
    About,
    VideoPlayer,
    AudioPlayer
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
