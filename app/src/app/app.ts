import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { doc, collection, writeBatch } from 'firebase/firestore';
import { FireConfig } from '../firebase/config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  constructor() {
    if(location.pathname.includes('192.168.0.')) return;
    this.saveView();
  }

  async saveView() {
    try {
      const viewId = doc(collection(FireConfig.Firestore, `/views`)).id;
      const viewsRef = doc(FireConfig.Firestore, `/views/${viewId}`);
      const ipInfo = await this.getIpInfoFromServer();
  
      const b = writeBatch(FireConfig.Firestore);
      const data = {
        view: true,
        pathname: window.location.pathname ?? 'Desconocido',
        createdAt: new Date(),
        ip: ipInfo
      };
      b.set(viewsRef, data, {merge: true});
      await b.commit();
      console.log('View saved');
    } catch (e) {
      console.error(e);
    }
  }

  async getIpInfoFromServer() {
    try {
      const res  = await fetch('https://api.ipquery.io/?format=json');
      const ipInfo = (await res.json());
      return ipInfo;
    } catch (e) {
      console.warn('No se pudo obtener IP info:', e);
      return null;
    }
  }
}
