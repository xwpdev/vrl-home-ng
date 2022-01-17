import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { EquipmentOnlyComponent } from './components/hardware/equipment-only/equipment-only.component';
import { HardwareComponent } from './components/hardware/hardware.component';
import { HtcViveComponent } from './components/hardware/htc-vive/htc-vive.component';
import { OculusQuestComponent } from './components/hardware/oculus-quest/oculus-quest.component';
import { OculusRiftComponent } from './components/hardware/oculus-rift/oculus-rift.component';
import { PlaystationComponent } from './components/hardware/playstation/playstation.component';
import { SamsungGearComponent } from './components/hardware/samsung-gear/samsung-gear.component';
import { HomeComponent } from './components/home/home.component';
import { AniPuzzleComponent } from './components/products/ani-puzzle/ani-puzzle.component';
import { KandyCasaComponent } from './components/products/kandy-casa/kandy-casa.component';
import { WiddaComponent } from './components/products/widda/widda.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'hardware', component: HardwareComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'widda', component: WiddaComponent },
  { path: 'kandy_casa', component: KandyCasaComponent },
  { path: 'ani_puzzle', component:  AniPuzzleComponent},
  { path: 'oculus_quest', component:  OculusQuestComponent},
  { path: 'oculus_rift', component:  OculusRiftComponent},
  { path: 'htc_vive', component:  HtcViveComponent},
  { path: 'play_station', component:  PlaystationComponent},
  { path: 'samsung_gear', component:  SamsungGearComponent},
  { path: 'equipment_only', component:  EquipmentOnlyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
