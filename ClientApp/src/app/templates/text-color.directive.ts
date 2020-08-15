import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  constructor() { }

  @HostBinding('className') // to which dom property assign this!
  get setTextColor() {
    return 'text-warning bg-danger'
  }

  @HostBinding('style.border') // to which dom property assign this!
  get setStyle() {
    return '2px solid red'
  }

}
