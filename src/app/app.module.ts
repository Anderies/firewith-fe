import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './homepage/brand/brand.component';
import { ServicesComponent } from './services/services.component';
import { FirewithTeamComponent } from './firewith-team/firewith-team.component';
import * as Hammer from 'hammerjs';
import { FirewithContactComponent } from './firewith-contact/firewith-contact.component';
import { FooterComponent } from './footer/footer.component';
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ServicesComponent,
    FirewithTeamComponent,
    FirewithContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule,
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
