import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

import { MaterialModule } from "./material.module";
import { NavComponent } from './complements/nav/nav.component';
import { FooterComponent } from './complements/footer/footer.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TitleComponent } from './complements/title/title.component';
import { SanitizedHTMLPipe } from './pipes/sanitized-html.pipe';
import { EducationComponent } from './components/education/education.component';
import { PageNotFoundComponent } from './complements/page-not-found/page-not-found.component';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ExperienceComponent,
    TitleComponent,
    SanitizedHTMLPipe,
    EducationComponent,
    PageNotFoundComponent,
    ContactComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
