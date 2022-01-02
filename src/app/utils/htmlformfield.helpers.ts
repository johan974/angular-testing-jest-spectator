import {By} from '@angular/platform-browser';

export function setFormElementValue(componentForm: any, selector: string, value: any) {
    const element = componentForm.querySelector( selector);
    element.value = value;
    element.dispatchEvent(new Event('input'));
}

export function getFormElementValue( componentForm: any, selector: string): string {
    const element = componentForm.querySelector( selector);
    if ( ! element) {
        throw new Error(`Cannot find element: ${selector}`);
    }
    return element.value;
}

export function getElementWithContentValue( componentForm: any, selector: string): string {
    const element = componentForm.querySelector( selector);
    if ( ! element) {
        throw new Error(`Cannot find element: ${selector}`);
    }
    return element.textContent;
}

export function clickFormElement( testFixture: any, selector: string) {
    const debugElement = testFixture.debugElement.query( By.css(selector));
    if (!debugElement) {
        throw new Error(`Cannot find element: ${selector}`);
    }
    const event = makeClickEvent(debugElement.nativeElement);
    debugElement.triggerEventHandler('click', event);
}

function makeClickEvent(target: EventTarget): Partial<MouseEvent> {
    return {
        preventDefault(): void {},
        stopPropagation(): void {},
        stopImmediatePropagation(): void {},
        type: 'click',
        target,
        currentTarget: target,
        bubbles: true,
        cancelable: true,
        button: 0
    };
}
