import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, inject, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { doc, getDoc, writeBatch } from "firebase/firestore";
import {FireConfig} from '../../../firebase/config';
import { isPlatformBrowser } from '@angular/common';
interface Invitation {
  id: string;
  name: string;
  img: string;
  confirmed?: boolean;
}

@Component({
  selector: 'invitations',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './invitations.html',
  styleUrl: './invitations.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Invitations {
  route = inject(ActivatedRoute);
  loading = signal(true);
  loadingBtns = signal(false);
  invitation = signal<Invitation | null>(null);
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


  invitations = signal<Invitation[]>([
    {
      id: 'beyran',
      name: 'Beyran Zuniga',
      img: 'https://firebasestorage.googleapis.com/v0/b/nicefer-app.firebasestorage.app/o/tmp-villatoro-me-invitations%2Finvitacion-beyran.png?alt=media&token=fa8d2a7f-b842-44ae-a6f1-0c1683573d4b'
    },
    {
      id: 'brandon',
      name: 'Brandon Lanza',
      img: 'https://firebasestorage.googleapis.com/v0/b/nicefer-app.firebasestorage.app/o/tmp-villatoro-me-invitations%2Finvitacion-brandon.png?alt=media&token=452f72dc-a62d-4422-9533-aad74d9e2bf0'
    },
    {
      id: 'carlos',
      name: 'Carlos Lanza',
      img: 'https://firebasestorage.googleapis.com/v0/b/nicefer-app.firebasestorage.app/o/tmp-villatoro-me-invitations%2Finvitacion-carlos.png?alt=media&token=cadbb86d-efb6-4b5d-8e84-61aa5da51e9b'
    },

    {
      id: 'cinthia',
      name: 'Cinthia Rodas',
      img: 'https://firebasestorage.googleapis.com/v0/b/nicefer-app.firebasestorage.app/o/tmp-villatoro-me-invitations%2Finvitacion-cinthia.png?alt=media&token=37d96823-f373-45f7-a4f9-ba34cbfcb497'
    },

    {
      id: 'elizabeth',
      name: 'Elizabeth Zuniga',
      img: 'https://firebasestorage.googleapis.com/v0/b/nicefer-app.firebasestorage.app/o/tmp-villatoro-me-invitations%2Finvitacion-elizabeth.png?alt=media&token=8d7fe518-5019-4bc6-9249-8aa8a3e686e2'
    },

    {
      id: 'jaime',
      name: 'Jaime Lanza',
      img: 'https://firebasestorage.googleapis.com/v0/b/nicefer-app.firebasestorage.app/o/tmp-villatoro-me-invitations%2Finvitacion-jaime.png?alt=media&token=f460a68a-1cd2-4030-ae00-4c7f4bbd500d'
    },

    {
      id: 'karlita',
      name: 'Karlita Lanza',
      img: 'https://firebasestorage.googleapis.com/v0/b/nicefer-app.firebasestorage.app/o/tmp-villatoro-me-invitations%2Finvitacion-karlita.png?alt=media&token=7c24522c-de2d-416a-87ae-e4dcba33b5c5'
    },

    {
      id: 'rocio',
      name: 'Rocío Lanza',
      img: 'https://firebasestorage.googleapis.com/v0/b/nicefer-app.firebasestorage.app/o/tmp-villatoro-me-invitations%2Finvitacion-rocio.png?alt=media&token=a5307d54-1840-480d-b241-dadc62709735'
    },

    {
      id: 'suamy',
      name: 'Suamy Barahona',
      img: 'https://firebasestorage.googleapis.com/v0/b/nicefer-app.firebasestorage.app/o/tmp-villatoro-me-invitations%2Finvitacion-suamy.png?alt=media&token=e66a34fb-207d-4fc3-8574-65d757d10b81'
    }
  ]);


  showInvitation(id: string | null) {
    const invitation = this.invitations().find(i => i.id === id);
    if(!invitation) {
      alert('No se encontró ninguna invitación');
      location.href = 'https://google.com';
      return;
    }

    this.invitation.set(invitation);
  }


  async confirmAttendance(id: string | undefined, confirmed: boolean) {
    if(!id) {
      alert('Intenta más tarde');
      return;
    }

    try {
      this.loadingBtns.set(true);
  
      const invitationRef = doc(FireConfig.Firestore, `/invitations/${id}`);
      const b = writeBatch(FireConfig.Firestore);
      b.set(invitationRef, {confirmed, createdAt: new Date()}, {merge: true});
      await b.commit();

      const invitations = this.invitations();
      const invitation = invitations.find(i => i.id === id);
      
      if(!invitation) {
        throw new Error('Se guardó la confirmación pero no se pudo encontrar la invitación localmente');
      }

      invitation.confirmed = confirmed;
      this.invitation.set(invitation);
    } catch (e) {
      alert('Intenta más tarde'); 
    } finally {
      this.loadingBtns.set(false);
    }

  }

  async checkAttendance(id: string) {
    try {
      const invitationRef = doc(FireConfig.Firestore, `/invitations/${id}`);
      const snap = await getDoc(invitationRef);
      const invitationDb = snap.data() as {confirmed: boolean, createdAt: Date};
      const invitation = this.invitations().find(i => i.id === id);
      if(!invitation) {
        throw new Error('Se guardó la confirmación pero no se pudo encontrar la invitación localmente');
      }
  
      invitation.confirmed = invitationDb.confirmed;
      this.invitation.set(invitation);
    } catch (e) {
      
    }
  }


  async ngOnInit() {
    console.log('invitations init!', this.invitations());
    if (!isPlatformBrowser(this.platformId)) return;
    const id = this.route.snapshot.paramMap.get('id')!;
    this.showInvitation(id);
    await this.checkAttendance(id);
    this.loading.set(false);
    
    await import('@dotlottie/player-component');
  }
}
