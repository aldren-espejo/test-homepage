import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ShortInfoComponent } from './short-info/short-info.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';
import { MapContactComponent } from './map-contact/map-contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBannerComponent,
    TestimonialsComponent,
    OurServicesComponent,
    ShortInfoComponent,
    InstagramFeedComponent,
    MapContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
