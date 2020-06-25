
import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public toggle: boolean = false;

  toggleCollapse() {
    this.toggle = !this.toggle
    console.log(this.toggle)
  }
}
