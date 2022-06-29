import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]',
})
export class PlaceholderDiretive {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
