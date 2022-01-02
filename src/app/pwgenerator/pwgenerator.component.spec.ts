import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwgeneratorComponent } from './pwgenerator.component';
import {PwGeneratorService} from '../services/pwgenerator.service';
import {createComponentFactory} from '@ngneat/spectator';
import {clickFormElement, getFormElementValue, setFormElementValue} from '../utils/htmlformfield.helpers';

fdescribe('PwgeneratorComponent', () => {
  let component: PwgeneratorComponent;
  let fixture: ComponentFixture<PwgeneratorComponent>;

  beforeEach(async () => {
    const mockPwGenerator: PwGeneratorService = jest.genMockFromModule('../services/pwgenerator.service');
    mockPwGenerator.generatePassword = jest.fn(( letters, numbers, symboels, length) => '1234567890a');
    await TestBed.configureTestingModule({
      declarations: [PwgeneratorComponent],
      providers: [{provide: PwGeneratorService, useValue: mockPwGenerator}],
    }).compileComponents();
    fixture = TestBed.createComponent(PwgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'translates only letters', async () => {
    setFormElementValue( fixture.nativeElement, '#useletters', true);
    setFormElementValue( fixture.nativeElement, '#usenumbers', true);
    setFormElementValue( fixture.nativeElement, '#usesymbols', true);
    setFormElementValue( fixture.nativeElement, '#length', 11);
    fixture.detectChanges();
    clickFormElement( fixture, '#generatepassword');
    fixture.detectChanges();
    fixture.whenStable().then( () => {
      expect(getFormElementValue(fixture.nativeElement, '#yourpassword')).toEqual('1234567890a');
    });
  });
});
