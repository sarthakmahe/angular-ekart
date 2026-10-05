import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  shopNow(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
