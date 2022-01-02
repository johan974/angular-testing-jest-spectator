import {ComponentFixture, TestBed} from '@angular/core/testing';
import {InputtextComponent} from './inputtext.component';
import {TranslationService} from '../services/translation.service';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

describe('InputtextComponent', () => {
    let component: InputtextComponent;
    let fixture: ComponentFixture<InputtextComponent>;

    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InputtextComponent],
            providers: [TranslationService]
        }).compileComponents();

        fixture = TestBed.createComponent(InputtextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
