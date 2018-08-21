import { Component, Renderer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isNavToggleOpen = false;
  private currentYear = 2019;

  constructor(private renderer: Renderer) {
    this.currentYear = new Date(Date.now()).getFullYear();
  }

  toggleNav(event: any) {
    this.isNavToggleOpen = ! this.isNavToggleOpen;
  }

}
