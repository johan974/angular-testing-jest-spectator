import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputtextComponent } from './component-asks-service/inputtext.component';
import {TranslationService} from './services/translation.service';
import { PwgeneratorComponent } from './component-asks-service2/pwgenerator.component';
import {PwGeneratorService} from './services/pwgenerator.service';
import { PipesComponent } from './pipes/pipes.component';
import {FormsModule} from '@angular/forms';
import {GreetPipe} from './pipes/greet.pipe';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    AppComponent,
    InputtextComponent,
    PwgeneratorComponent,
    PipesComponent,
    GreetPipe,
    Component1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TranslationService, PwGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
