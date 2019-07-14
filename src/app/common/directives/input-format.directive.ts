import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input() appInputFormat: string;
  // tslint:disable-next-line:no-input-rename
  @Input('empty-color') eColor: string;
  // tslint:disable-next-line:no-input-rename
  @Input('fill-color') fColor: string;
  showText: HTMLDivElement;
  @HostListener('blur') onblur() {
    const caseType = this.appInputFormat;
    const value = this.ele.nativeElement.value;
    if (caseType === 'uppercase') {
      this.ele.nativeElement.value = (value as string).toUpperCase();
    } else if (caseType === 'lowercase') {
      this.ele.nativeElement.value = (value as string).toLowerCase();
    }
    (this.ele.nativeElement as HTMLInputElement).parentElement.removeChild(this.showText);
    // console.log(this.ele.nativeElement.value);
  }
  @HostListener('keyup') onkeyup() {
    if ((this.ele.nativeElement as HTMLInputElement).value.trim() === '') {
      (this.ele.nativeElement as HTMLInputElement).style.borderColor = this.eColor;
    } else {
      (this.ele.nativeElement as HTMLInputElement).style.borderColor = this.fColor;
    }

    const caseType = this.appInputFormat;
    const value = this.ele.nativeElement.value;
    if (caseType === 'uppercase') {
      this.showText.innerHTML = (value as string).toUpperCase();
    } else if (caseType === 'lowercase') {
      this.showText.innerHTML = (value as string).toLowerCase();
    }
    (this.ele.nativeElement as HTMLInputElement).parentElement.appendChild(this.showText);
  }



  constructor(private ele: ElementRef) {
    // console.log(this.ele.nativeElement.value);
    this.showText = document.createElement('div');
    this.showText.style.position = 'absolute';
    this.showText.style.border = '1px solid #c7c3c3';
    this.showText.style.padding = '2px 4px';
    this.showText.style.backgroundColor = '#fff';
    this.showText.style.minWidth = '700px';
    this.showText.style.boxShadow = '4px 6px 6px grey';
  }

}
