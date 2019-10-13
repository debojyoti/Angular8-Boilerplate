import { Injectable } from '@angular/core';

/**
 * 
 * A service to provide global level access to loader
 * 
 * Any component can control the current state of loader in this file
 * 
 * A single instance will be shared through ot all the modules of the app
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { 
    // console.log();
    
  }
}
