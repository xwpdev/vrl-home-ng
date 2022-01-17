import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { HardwareComponent } from './components/hardware/hardware.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { PanelComponent } from './components/services/panel/panel.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WiddaComponent } from './components/products/widda/widda.component';
import { KandyCasaComponent } from './components/products/kandy-casa/kandy-casa.component';
import { AniPuzzleComponent } from './components/products/ani-puzzle/ani-puzzle.component';

import { OwlModule } from 'ngx-owl-carousel';
import { OculusQuestComponent } from './components/hardware/oculus-quest/oculus-quest.component';
import { OculusRiftComponent } from './components/hardware/oculus-rift/oculus-rift.component';
import { HtcViveComponent } from './components/hardware/htc-vive/htc-vive.component';
import { PlaystationComponent } from './components/hardware/playstation/playstation.component';
import { SamsungGearComponent } from './components/hardware/samsung-gear/samsung-gear.component';
import { EquipmentOnlyComponent } from './components/hardware/equipment-only/equipment-only.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    HardwareComponent,

    FaqComponent,
    ContactComponent,
    PanelComponent,
    WiddaComponent,
    KandyCasaComponent,
    AniPuzzleComponent,
    OculusQuestComponent,
    OculusRiftComponent,
    HtcViveComponent,
    PlaystationComponent,
    SamsungGearComponent,
    EquipmentOnlyComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
