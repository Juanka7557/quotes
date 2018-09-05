import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import quotes from "../../data/quotes";
import {QuotesPage} from "../quotes/quotes";

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  quoteCollection: {category:string, quotes:Quote[], icon:string}[];
  quotesPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quotesPage=QuotesPage;
  }

  goQuoteGroup(selectedQuoteGroup: any){
    console.log(selectedQuoteGroup);
    this.navCtrl.push(QuotesPage, {selectedQuoteGroup})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  ngOnInit(): void {
    this.quoteCollection = quotes;
  }

}
