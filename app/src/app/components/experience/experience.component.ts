import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ExperienceItem{
  name: string,
  position: string,
  description: string,
  startDate: string,
  endDate: string
};

interface Technology {
  name: string,
  img: { src?: string, width: number, height: number, svg?: any },
  level: string
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }

  expList: ExperienceItem[] = [
    {
      name: 'Árboles de Justicia ONGD',
      position: 'Desarrollador Web Full-Stack (Beca)',
      description: 'Beca de trabajo para desarrollar el panel de administración y app web de la empresa',
      startDate: 'nov. 2021',
      endDate: 'Actualidad (fines de semana)'
    },
    {
      name: 'Monkey B. Apps',
      position: 'Desarrollador Web Full-Stack',
      description: 'Creación de sitios webs y aplicaciones móviles (Ionic) para múltiples empresas de Estados Unidos, Ecuador, Guatemala, Honduras y Panamá',
      startDate: 'abr. 2021',
      endDate: 'abr. 2022'
    },
    {
      name: 'Aliento de Luz ONGD',
      position: 'Desarrollador Web (Voluntariado)',
      description: 'Desarrollo del sitio web principal',
      startDate: 'feb. 2020',
      endDate: 'nov. 2021'
    },
  ];

  technologies: Technology[] = [
    {
      name: 'HTML',
      img: {
        width: 48,
        height: 48,
        svg: `<svg width="32" viewBox="0 0 256 361" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26"></path><path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529"></path><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB"></path><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z"></path><path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF"></path></svg>`
      },
      level: 'Avanzado'
    },
    {
      name: 'CSS3',
      img: {
        width: 48,
        height: 48,
        svg: `<svg width="32" viewBox="0 0 256 361" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M127.844 360.088L23.662 331.166.445 70.766h255.11l-23.241 260.36-104.47 28.962z" fill="#264DE4"></path><path d="M212.417 314.547l19.86-222.49H128V337.95l84.417-23.403z" fill="#2965F1"></path><path d="M53.669 188.636l2.862 31.937H128v-31.937H53.669zM47.917 123.995l2.903 31.937H128v-31.937H47.917zM128 271.58l-.14.037-35.568-9.604-2.274-25.471h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58z" fill="#EBEBEB"></path><path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484V0zM106.901 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9V0zM153.319 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32V0z"></path><path d="M202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576z" fill="#FFF"></path></svg>`
      },
      level: 'Avanzado'
    },
    {
      name: 'SaSS',
      img: {
        width: 48,
        height: 48,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><path data-name="layer1" d="M19.7 46.9c-2.2 2.3-2.8 5.1-1.6 5.8 1.1.6 3.7-.1 5.6-2.1a10.707 10.707 0 0 0 1.5-2.2c.1-.2.1-.3.2-.5s.1-.3.2-.5a8.662 8.662 0 0 0 .1-4.8c-.1.1-.2.1-.3.2a21.081 21.081 0 0 0-5.7 4.1z" fill="#cd679a"></path><path data-name="layer1" d="M32 0a32 32 0 1 0 32 32A31.966 31.966 0 0 0 32 0zm10.4 28.4c-5.5 2.1-10.1 1.8-12 1.2a6.15 6.15 0 0 1-3.7-2.9c-.1-.3-.3-.8 0-1 .2-.1.3-.1.8.5s2.6 2.1 6.5 1.6c10.3-1.1 16.4-9.1 14.5-13.4-1.4-3-9.3-4.4-19.1.6-12.1 6-12.7 11-12.8 12.8-.3 5.2 6.4 7.9 10 11.7.1.1.2.2.2.3a17.286 17.286 0 0 1 5-.7c5.8-.1 9.1 3.7 9 7.2a4.388 4.388 0 0 1-3.1 3.9c-.3.1-.5.1-.6-.2 0-.2.1-.3.5-.5a3.443 3.443 0 0 0 1.8-2.5c.2-1.5-.9-5-6.5-5.6a12.514 12.514 0 0 0-4.9.3 10.766 10.766 0 0 1-1.1 9.8 9.893 9.893 0 0 1-10.8 4.4c-1.4-.4-3.4-3.2-1.6-7.1 1.7-3.7 8.8-7.3 9.8-7.8-3.3-2.9-11.4-6.7-12.5-12.6-.3-1.7.5-5.7 5.4-10.3 4.1-3.9 9.9-6.8 15.2-8.7 8.9-3.2 18.3-1.3 19.8 4.4 1.3 5.5-3.6 12.2-9.8 14.6z" fill="#cd679a"></path></svg>`
      },
      level: 'Avanzado'
    },
    {
      name: 'JavaScript',
      img: {
        width: 48,
        height: 48,
        svg: `<svg width="32" height="32" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 0h256v256H0V0z" fill="#F7DF1E"></path><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path></svg>`
      },
      level: 'Avanzado'
    },
    {
      name: 'TypeScript',
      img: {
        width: 48,
        height: 48,
        svg: `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="32" height="32"><style>.st0{fill:#007acc}.st1{fill:#fff}</style><path class="st0" d="M0 200V0h400v400H0"></path><path class="st1" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"></path></svg>`
      },
      level: 'Avanzado'
    },
    {
      name: 'PHP',
      img: {
        width: 48,
        height: 48,
        svg: `<svg width="52" viewBox="0 0 256 134" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill-rule="evenodd"><ellipse fill="#8993BE" cx="128" cy="66.63" rx="128" ry="66.63"></ellipse><path d="M35.945 106.082l14.028-71.014H82.41c14.027.877 21.041 7.89 21.041 20.165 0 21.041-16.657 33.315-31.562 32.438H56.11l-3.507 18.411H35.945zm23.671-31.561L64 48.219h11.397c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.52zM100.192 87.671l14.027-71.013h16.658l-3.507 18.41h15.78c14.028.877 19.288 7.89 17.535 16.658l-6.137 35.945h-17.534l6.137-32.438c.876-4.384.876-7.014-5.26-7.014H124.74l-7.89 39.452h-16.658zM153.425 106.082l14.027-71.014h32.438c14.028.877 21.042 7.89 21.042 20.165 0 21.041-16.658 33.315-31.562 32.438h-15.781l-3.507 18.411h-16.657zm23.67-31.561l4.384-26.302h11.398c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.521z" fill="#232531"></path></g></svg>`
      },
      level: 'Avanzado'
    },
    {
      name: 'MySQL',
      img: {
        width: 48,
        height: 48,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--bs-danger)" class="bi bi-server" viewBox="0 0 16 16"><path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z"/><path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z"/><path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"/></svg>`
      },
      level: 'Avanzado'
    },
    {
      name: 'Angular',
      img: {
        width: 48,
        height: 48,
        svg: `<svg width="32" height="32" viewBox="0 0 256 272" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z" fill="#E23237"></path><path d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z" fill="#B52E31"></path><path d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z" fill="#FFF"></path></svg>`
      },
      level: 'Avanzado'
    },
    {
      name: 'Bootstrap',
      img: {
        width: 48,
        height: 48,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 118 94" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="var(--bs-indigo)"></path></svg>`
      },
      level: 'Avanzado'
    },
    {
      name: 'PWA',
      img: {
        width: 48,
        height: 48,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" height="25" viewBox="0 0 1952.00 734.93" enable-background="new 0 0 1952.00 734.93" xml:space="preserve"><g><path fill="#3D3D3D" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 1436.62,603.304L 1493.01,460.705L 1655.83,460.705L 1578.56,244.39L 1675.2,0.000528336L 1952,734.933L 1747.87,734.933L 1700.57,603.304L 1436.62,603.304 Z "></path><path fill="#5A0FC8" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 1262.47,734.935L 1558.79,0.00156593L 1362.34,0.0025425L 1159.64,474.933L 1015.5,0.00351906L 864.499,0.00351906L 709.731,474.933L 600.585,258.517L 501.812,562.819L 602.096,734.935L 795.427,734.935L 935.284,309.025L 1068.63,734.935L 1262.47,734.935 Z "></path><path fill="#3D3D3D" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 186.476,482.643L 307.479,482.643C 344.133,482.643 376.772,478.552 405.396,470.37L 436.689,373.962L 524.148,104.516C 517.484,93.9535 509.876,83.9667 501.324,74.5569C 456.419,24.852 390.719,0.000406265 304.222,0.000406265L -3.8147e-006,0.000406265L -3.8147e-006,734.933L 186.476,734.933L 186.476,482.643 Z M 346.642,169.079C 364.182,186.732 372.951,210.355 372.951,239.95C 372.951,269.772 365.238,293.424 349.813,310.906C 332.903,330.331 301.766,340.043 256.404,340.043L 186.476,340.043L 186.476,142.598L 256.918,142.598C 299.195,142.598 329.103,151.425 346.642,169.079 Z "></path></g></svg>`
      },
      level: 'Avanzado'
    },
  ];

  ngOnInit(): void {
  }

  /**
  * @method getSliceBreak: dividir un array en partes iguales
  * @param i {Number}: index del for
  * @param n {Number}: cortar en N partes
  */
  getSliceBreak(i:number, n:number): SliceBreak  {
    let out: SliceBreak = { init: n * i, end: ++i * n };
    return out;
  }
}

interface SliceBreak { init: number, end: number }
