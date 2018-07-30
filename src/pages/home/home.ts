import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Services
import { HomeService } from './homeService';
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
    public homeSrv: HomeService
  ) {
    this._init();
  }

  _init() {
    this.homeSrv.getTorneos().subscribe(
      (res) => {
        this.listTorneos = JSON.parse(res._body);
        console.log(this.listTorneos);
      },
      (err: any) => {

      },
      () => {

      })
  }

}
