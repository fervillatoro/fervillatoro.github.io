import { Component, OnInit } from '@angular/core';

interface Item {
  name: string,
  href: string
};

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items: Item[] = [
    { name: 'Inicio',    href: '/' },
    { name: 'Experiencia', href: '/experience' },
    { name: 'Educación',  href: '/education' },
    // { name: 'Contactar',   href: '/contact' }
  ];

  isPageActive = (href: string) => window.location.pathname == href;

  constructor() { }

  isActive(href: string) {
    return window.location.href.indexOf(href) > -1;
  }

  ngOnInit(): void {
  }

}
