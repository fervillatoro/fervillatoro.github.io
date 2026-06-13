import { Component, ElementRef, ViewChild } from '@angular/core';
import { collection, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { FireConfig } from '../../../firebase/config';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  // async cleanViews() {
  //   const viewsRef = collection(FireConfig.Firestore, `/views`);
  //   const q = query(viewsRef, where('ip.ip', '==', '24.242.224.195'));
  //   const snap = await getDocs(q);
  //   const b = writeBatch(FireConfig.Firestore);

  //   for (const doc of snap.docs) {
  //     b.delete(doc.ref);
  //   }

  //   await b.commit();
  //   alert('Finalizado exitosamente!');
  // }

  // ngOnInit() {
  //   this.cleanViews();
  // }

  ngAfterViewInit(): void {

    const panels = gsap.utils.toArray<HTMLElement>('.section');
    panels.pop();

    panels.forEach((panel) => {

      const innerpanel = panel.querySelector('.section-inner') as HTMLElement;

      if (!innerpanel) return;

      const panelHeight = innerpanel.offsetHeight;
      const windowHeight = window.innerHeight;

      const difference = panelHeight - windowHeight;

      const fakeScrollRatio =
        difference > 0
          ? difference / (difference + windowHeight)
          : 0;

      if (fakeScrollRatio) {
        panel.style.marginBottom =
          panelHeight * fakeScrollRatio + 'px';
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'bottom bottom',
          end: () =>
            fakeScrollRatio
              ? `+=${innerpanel.offsetHeight}`
              : 'bottom top',
          pinSpacing: false,
          pin: true,
          scrub: true
        }
      });

      if (fakeScrollRatio) {
        tl.to(innerpanel, {
          yPercent: -100,
          y: window.innerHeight,
          duration: 1 / (1 - fakeScrollRatio) - 1,
          ease: 'none'
        });
      }

      tl.fromTo(
        panel,
        { scale: 1, opacity: 1 },
        {
          scale: 0.7,
          opacity: 0.5,
          duration: 0.9
        }
      ).to(panel, {
        opacity: 0,
        duration: 0.1
      });
    });

  }
}
