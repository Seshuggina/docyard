import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'docyard';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById('appBody').classList.add('scrolled');
    } else {
      document.getElementById('appBody').classList.remove('scrolled');
    }
  }
}
