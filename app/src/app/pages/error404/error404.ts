import { Component } from '@angular/core';

@Component({
  selector: 'app-error404',
  imports: [],
  templateUrl: './error404.html',
  styleUrl: './error404.scss',
})
export class Error404 {
  constructor() {
    if(location.pathname.startsWith('/invitations')) {
      setTimeout(() => {
        window.location.href = "https://firebasestorage.googleapis.com/v0/b/nicefer-app.firebasestorage.app/o/tmp%2Fevent_canceled.png?alt=media&token=d69c6daa-ab00-41d6-83b8-7fbc8d8eac54";
      }, 1000);
    }
  }
}
