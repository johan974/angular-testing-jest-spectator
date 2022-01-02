import {Component} from '@angular/core';
import {TranslationService} from '../services/translation.service';

@Component({
    selector: 'app-inputtext',
    templateUrl: './inputtext.component.html',
    styleUrls: ['./inputtext.component.css']
})
export class InputtextComponent {
    englishText: string;
    translatedText: string;

    constructor(private translationService: TranslationService) {
    }

    parseText( $event) {
        this.englishText = $event.valueOf().value;
        console.log( 'Text = ' + this.englishText);
    }

    translate() {
        // this.translationService.translate(this.englishText).subscribe(result => {
        //     this.translatedText = result;
        // });
        this.translatedText = this.englishText;
    }
}
