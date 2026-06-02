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
        window.location.href = "https://firebasestorage.googleapis.com/v0/b/nicefer-app.firebasestorage.app/o/tmp%2FSin%20nombre%202.png?alt=media&token=2c0ea638-cf19-468e-a15f-c0775d7cfda6";
      }, 1000);
    }
  }
}
