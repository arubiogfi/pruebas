import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Services
import { HomeProvider } from '../../providers/home/home';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public mockData =[{
    "member1": "Adrián Rubio Tejada",
    "member2": "Victor",
    "name": "Dartdergroup"
  },
  {
    "member1": "Pepe",
    "member2": "Juan",
    "name": "Indarts team"
  }];

  public listTorneos: any;

  constructor(
    public navCtrl: NavController,
    public homeProvider: HomeProvider
  ) {
    this._init();
  }

  _init() {
    this.homeProvider.getAllCountries()/* .subscribe(
      (res) => {
        this.listTorneos = res;
        console.log(this.listTorneos);
      }) */
  }

}
