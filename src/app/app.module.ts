import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingsoonModule } from './comingsoon/comingsoon.module';
import { ContactModule } from './contact/contact.module';
import { ErrorModule } from './error/error.module';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PrivacyModule } from './privacy/privacy.module';
import { WorkoutModule } from './workout/workout.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComingsoonModule,
    ContactModule,
    HomeModule,
    PrivacyModule,
    WorkoutModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
