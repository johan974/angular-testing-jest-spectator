import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputtextComponent } from './inputtext/inputtext.component';
import {TranslationService} from './services/translation.service';
import { PwgeneratorComponent } from './pwgenerator/pwgenerator.component';
import {PwGeneratorService} from './services/pwgenerator.service';

@NgModule({
  declarations: [
    AppComponent,
    InputtextComponent,
    PwgeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TranslationService, PwGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
