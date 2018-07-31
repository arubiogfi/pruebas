import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Config
import * as CONFIG from '../../config/config';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(
    public http: HttpClient
  ) {
    console.log('Hello HomeProvider Provider');
  }

  getAllCountries() {
    return console.log(CONFIG.API);
  }

  getAllProvinces(country: String) {
    
  }
}
