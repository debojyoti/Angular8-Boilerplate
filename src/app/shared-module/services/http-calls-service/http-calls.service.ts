import { Injectable } from '@angular/core';
import { HttpConnectorsService } from '../http-connectors/http-connectors.service';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  constructor(
    private httpConnector: HttpConnectorsService
  ) { }

  // exchangeAuthTokenFromFirebase(googleToken) {
  //   return new Promise((resolve, reject) => {
  //     this.connectorService.postRequest(cloudFunctionsBaseURL+'/exchangeAuthToken', {
  //       googleToken
  //     }).subscribe(res => {
  //       resolve(res);
  //     }, err => {
  //       reject(err)
  //     })
  //   })
  // }
}
