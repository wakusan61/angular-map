import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopComponent} from './top/top.component';
import {MapComponent} from './map/map.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {GoogleMapsModule} from '@angular/google-maps';
import {LoadMapsApiModule} from './load-maps-api/load-maps-api.module';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    LoadMapsApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
