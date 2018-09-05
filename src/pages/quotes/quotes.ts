import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesProvider} from "../../providers/quotes/quotes";


/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: string, quotes: Quote[], icon:string};

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private quoteService: QuotesProvider) {
  }

  onAddToFavorite(selectedQuote: Quote):void {
    const  alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text:'Yes, go ahead',
          handler: ()=> {
            this.quoteService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text:'No, I change my mind!',
          role: 'cancel',
          handler: ()=> {
            console.log('Cancelled');
          }
        }
      ]
    });
    alert.present();
  }
  ionViewDidLoad() {

    //this.quoteGroup = this.navParams.get('selectedQuoteGroup');
  }

  ngOnInit(): void {
    this.quoteGroup = this.navParams.get('selectedQuoteGroup');
  }

  onRemoveFromFavorites(quote: Quote){
    this.quoteService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote){
    return this.quoteService.isQuoteFavorite(quote);
  }
}
