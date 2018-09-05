import { Component } from '@angular/core';
import {IonicPage,  ModalController, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesProvider} from "../../providers/quotes/quotes";
import {QuotePage} from "../quote/quote";
import {SettingsProvider} from "../../providers/settings/settings";

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private quotesService: QuotesProvider,
              private modalCtrl: ModalController,
              private settingsService: SettingsProvider) {
  }

  ionViewWillEnter(){
    this.quotes=this.quotesService.getFavoriteQuotes();
    console.log(this.quotes);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  onViewElement(quote: Quote): void{
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove:boolean)=>{
      if(remove){
        this.onRemoveForFavorite(quote);
      }
    });
  }

  onRemoveForFavorite(quote: Quote){
    this.quotesService.removeQuoteFromFavorites(quote);
    //this.quotes=this.quotesService.getFavoriteQuotes();
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id==quote.id;
    });
    this.quotes.splice(position,1)
  }

  getBackground(): string{
    return this.settingsService.isAltBackground()?'altQuoteBackground':'quoteBackground';
  }

  isAltBackground(){
    return this.settingsService.isAltBackground();
  }

}
