import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PipesComponent} from './pipes.component';
import {GreetPipe} from './greet.pipe';
import {getElementWithContentValue, setFormElementValue} from '../utils/htmlformfield.helpers';
import {FormsModule} from '@angular/forms';

fdescribe('PipesComponent', () => {
    let component: PipesComponent;
    let fixture: ComponentFixture<PipesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PipesComponent, GreetPipe],
            imports: [FormsModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PipesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Pipe test 1: manually by calling transform', () => {
        const original = 'Dit is een originele 80 tekst.';
        expect(new GreetPipe().transform(original)).toEqual('Hello, ' + original + '!');
    });

    it('Pipe test 2: using a host, is more realistic', () => {
        const inputText = 'vreemde tekst hier';
        setFormElementValue(fixture.nativeElement, '#pipe-input', inputText);
        fixture.detectChanges();
        expect(getElementWithContentValue(fixture.nativeElement, '#piped-text')).toEqual('Output: Hello, ' + inputText + '!');
    });
});
