import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NetworkEngineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkEngineProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NetworkEngineProvider Provider');
  }
  callServer(url):Promise<any>
  {
let response:Promise<any>;
   response=this.http.get(url).toPromise().then(responseData=>responseData).catch(err=>this.errorDisplay(err));
   return response;
  }
errorDisplay(error:any):Promise<any>
{
  return Promise.reject(error.message || error);
}
}
