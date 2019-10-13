import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpConnectorsService {

  constructor(
    private http: HttpClient
  ) { }

  public getRequest(url,params) : Observable<any> {
    return this.http.get(
      url,
      {
        params : params
      }
    )
  }

  /**
   * 
   * General method to serve post requests
   * 
   * @param url Endpoint address
   * @param params Parameters object
   */
  public postRequest(url, params) : Observable<any> {
    return this.http.post(
      url,
      {
        params : params
      }
    )
  }
  
}
