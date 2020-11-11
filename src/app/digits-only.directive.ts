import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDigitsOnly]'
})
export class DigitsOnlyDirective {

  constructor() { }

  @HostListener('input', ['$event'])
  onKeyDown(event) {
    const inputValue = event.target as HTMLInputElement;
    inputValue.value = inputValue.value.replace(/[^0-9/]/g, '')
  }
}
