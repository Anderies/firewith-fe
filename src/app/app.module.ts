import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './homepage/brand/brand.component';
import { ServicesComponent } from './services/services.component';
import { FirewithTeamComponent } from './firewith-team/firewith-team.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ServicesComponent,
    FirewithTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
