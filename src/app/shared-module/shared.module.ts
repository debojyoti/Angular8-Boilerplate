import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpCallsService } from './services/http-calls-service/http-calls.service';
import { HttpConnectorsService } from './services/http-connectors/http-connectors.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';


@NgModule({
  imports: [  
  
CommonModule,
    HttpClientModule
  ],
  providers: [
    TokenInterceptorService, 
    HttpCallsService,
    HttpConnectorsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  exports: [ ]
})
export class SharedModule { }
