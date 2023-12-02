import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccuweatherInterceptor } from './core/interceptors/accuweather.interceptor';
import { ApiWeatherService } from './core/services/api-weather-service.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccuweatherInterceptor,
      multi: true
    },
    ApiWeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
