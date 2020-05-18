import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {MatChipsModule} from '@angular/material/chips';
import { NgxSkillBarModule } from "ngx-skill-bar";
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { BirthDayPipe } from './pipes/birth-day.pipe';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

//Servicios
import { ExperienceService } from './services/experience.service';
import { EducationService } from './services/education.service';
import { HabilitiesService } from './services/habilities.service';
import { PortfolioService } from './services/portfolio.service'
//Rutas
import { app_routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    BirthDayPipe,
    ExperienceComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxTypedJsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    NgxSkillBarModule,
    app_routing
  ],
  providers: [
    ExperienceService,
    EducationService,
    HabilitiesService,
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
