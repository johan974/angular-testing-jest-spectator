import { Component, OnInit } from '@angular/core';
import {PwGeneratorService} from "../services/pwgenerator.service";

@Component({
  selector: 'app-pwgenerator',
  templateUrl: './pwgenerator.component.html',
  styleUrls: ['./pwgenerator.component.css']
})
export class PwgeneratorComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  constructor( private pwGenerator: PwGeneratorService) {
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    this.password = this.pwGenerator.generatePassword( this.includeLetters, this.includeNumbers, this.includeSymbols, this.length);
  }
}
