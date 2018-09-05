import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {

  private altBackground = false;
  constructor() {
    console.log('Hello SettingsProvider Provider');
  }

  setBackground(isAlt: boolean){
    this.altBackground = isAlt;

  }

  isAltBackground(): boolean{
    return this.altBackground;
  }
}
