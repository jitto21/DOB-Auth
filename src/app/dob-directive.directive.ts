import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDobDirective]'
})
export class DobDirectiveDirective {

  constructor() { }
  @HostListener('input', ['$event'])
  onKeyDown(event) {
    if (event.data) { //ignores entire code on backspace
      const inputValue = event.target as HTMLInputElement;
      let trimmedValue: string = inputValue.value.replace(/\s+/g, ''); //removing space
      if (trimmedValue.length >= 10) { //restricts on length: 10
        console.log("10");
        trimmedValue = trimmedValue.substr(0, 10);
        inputValue.value = trimmedValue.substr(0, 10);
      }
      else {
        if (trimmedValue.match(/^\d{2}$/)) {
          console.log("2");
          inputValue.value = trimmedValue + '/';
        }
        else if (trimmedValue.match(/^\d{2}\/\d{2}$/)) {
          console.log("4");
          inputValue.value = trimmedValue + '/';
        }
      }

      // let mod1 = '';
      // let mod2 = '';
      // if (trimmedValue.length >= 2) { //for month
      //   mod1 = trimmedValue.substring(0, 2) + '/' + trimmedValue.substr(2);
      //   // console.log("mod1: ", mod1);
      //   inputValue.value = mod1;
      // }
      // if (mod1.length >= 5) { //for year based on month
      //   mod2 = mod1.substring(0, 5) + '/' + mod1.substr(5);
      //   // console.log("mod2: ", mod2);
      //   inputValue.value = mod2;
      // }
    }

  }

}
