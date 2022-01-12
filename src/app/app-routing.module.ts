import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { HardwareComponent } from './components/hardware/hardware.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
