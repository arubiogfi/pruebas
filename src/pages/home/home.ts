import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
// Services
import { HomeProvider } from '../../providers/home/home';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listCountries: any;
  public listProvincias: any;
  public listCities: any;

  public formModel: any = {};

  // Rooting
  contactPage: any;
  constructor(
    public navCtrl: NavController,
    public homeProvider: HomeProvider
  ) {
    this._init();
    this.contactPage = ContactPage;
  }

  _init() {
    this.homeProvider.getAllCountries().subscribe(
      (res) => {
        this.listCountries = this._getKeys(res);
      })
  }

  _getProvinces(_country:String) {
    this.homeProvider.getAllProvinces(_country).subscribe(
      (res: Response) => {
        this.listProvincias = this._getKeys(res);
      }
    );
  }

  _getCities(_province:String) {
    this.homeProvider.getAllCities(this.formModel.country, _province).subscribe(
      (res: Response) => {
        this.listCities = this._getKeys(res);
      }
    );
  }

  goCOntact() {
    this.navCtrl.parent.select(3);
  }

  _getKeys(data) {
    let dataReturn:any[] = [];

    for(let key in data) {
      dataReturn.push(key);
    }

    return dataReturn;
  }

}
