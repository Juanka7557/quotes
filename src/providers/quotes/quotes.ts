import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Quote} from "../../data/quote.interface";

/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuotesProvider {

  private favoriteQuotes: Quote[]=[];

  constructor() {
    console.log('Hello QuotesProvider Provider');
  }

  addQuoteToFavorites(quote: Quote):void {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  removeQuoteFromFavorites(quote: Quote):void {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id==quote.id;
    });
    this.favoriteQuotes.splice(position,1);
  }

  getFavoriteQuotes(){
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote){
    return this.favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id==quote.id;
    }) ;
  }
}
