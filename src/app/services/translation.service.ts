import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';

@Injectable()
export class TranslationService {
    constructor() {}
    translate( fromText: string): Observable<string> {
        return new BehaviorSubject( 'translation from ' + fromText);
    }
}
