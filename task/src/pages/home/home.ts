import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contest_number:any;
  Contestid: number[];
  Contestname:string[];
  Handle: any[];
    Rank: number[];
  Ratingupdatetimeseconds:number[];
  Oldrating:number[];
  Newrating:number[];


  constructor(public navCtrl: NavController,public http:HttpClient,public network:NetworkEngineProvider) {
  
  }
  
  getServerData()
  {
    let url="http://codeforces.com/api/contest.ratingChanges?contestId=1034";
    let serverResponse:Promise<any>;
   // this.network.callServer(url);
    serverResponse=this.network.callServer(url);
    serverResponse.then(data=>{
      console.log(JSON.stringify(data) );
      this.parseData(data);
    }).catch(err=>{
      console.log(err);
    })
    
  }

   parseData(data)
  {
     let jsonArray=data.result;
    this. Contestid=[];
    this. Contestname=[];
    this. Handle=[];
       this.Rank= [];
    this. Ratingupdatetimeseconds=[];
    this. Oldrating=[];
    this. Newrating=[];

    for(let i=0;i<20;i++)
    {
        let jsonObject=jsonArray[i];
        this.Contestid.push(jsonObject.contestId);
        this.Contestname.push(jsonObject.contestName);
        this.Handle.push(jsonObject.handle);
        this.Rank.push(jsonObject.rank);
        this.Ratingupdatetimeseconds.push(jsonObject.ratingUpdateTimeSeconds);
        this.Oldrating.push(jsonObject.oldRating);
        this.Newrating.push(jsonObject.newRating);
    } 
  }


}
