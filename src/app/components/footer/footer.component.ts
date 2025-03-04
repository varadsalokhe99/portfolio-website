import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  skills = [
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 65 },
    { name: 'React', value: 70 },
    { name: 'JS', value: 75 },
    { name: 'Angular', value: 75 },
    { name: 'TS', value: 80 },
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      const progressBars = document.querySelectorAll('.progress-bar');
      progressBars.forEach((bar: any, index: number) => {
        bar.style.width = this.skills[index].value + '%';
      });
    }, 500); 
  }

}
