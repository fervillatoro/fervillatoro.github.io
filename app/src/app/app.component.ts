import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fervillatoro';
  ngOnInit() {
    // ocultar version de angular
    let body:any = document.body;
    body.querySelector("[ng-version]").removeAttribute('ng-version');
  }

}
