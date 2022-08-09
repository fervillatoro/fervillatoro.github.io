import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, public location: Location) { }

  isLoad: boolean = false;
  frmContact: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    queryType: new FormControl('', Validators.required),
    msg: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Záéíóúñ!¡¿?%$,.0-9\\s]+")]),
  });

  get frmContactCtrls() { return this.frmContact.controls; }

  async send(): Promise<any> {
    if (this.frmContact.invalid) return false;
    this.isLoad = true;

    let prepareMsg: string =
    'NUEVO MENSAJE. \n\n' +
    'Desde: \n fervillatoro.github.io/contact \n\n' +
    'Correo:\n'           + this.frmContact.value.email     + " \n\n" +
    'Tipo de consulta:\n' + this.frmContact.value.queryType + " \n\n" +
    'Mensaje:\n'          + this.frmContact.value.msg;
    let urlApiCallMeBot = `https://arbolesdejusticia.org/api/send_msg_tg.php?text=${encodeURIComponent(prepareMsg)}`;

    await fetch(urlApiCallMeBot).then(res => res.text())
    .then(result => {
      console.log(result, result.trim() == 'OK');
      this.showAlert('Mensaje enviado', 'OK');
      this.frmContact.reset();
    })
    .catch(() => this.showAlert('Intenta más tarde', 'OK'));
    this.isLoad = false;
  }

  showAlert(message: string, action = '', config?: MatSnackBarConfig) {
    return this.snackBar.open(message, action, { duration: 3000, ...config });
  }

  // sendMsgWhatsApp() {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append("Authorization", "Bearer EAAF0NXEvC0sBAGtAkEsAAqyuZBGu902eCOZACesXFTmizaZCPF43hAXEO8FW6A2JoZBZAaKVZCFaWuo6FkMn89wyZCDjdetVkZCw9ByIqN76K2jgajNMrvrXFkMR7R519MaZAa7L7ceeDPRf5o16pxWyylZAKOZCO3UhkxSTZA1HoCndDFNHOMO9QGwAW5MVYKxuqYAY4ZCbUWVjj0HwSU8fwXIhCGRRMOx5dx3IZD");
  //
  //   var raw = JSON.stringify({
  //     "messaging_product": "whatsapp",
  //     "to": "50496798310",
  //     "type": "template",
  //     "template": {
  //       "name": "hello_world",
  //       "language": {
  //         "code": "en_US"
  //       },
  //       "parameters": [
  //         { type: "text", text: this.frmContact.value.email     },
  //         { type: "text", text: this.frmContact.value.queryType },
  //         { type: "text", text: this.frmContact.value.msg       },
  //       ]
  //     }
  //   });
  //
  //   console.log(raw);
  //
  //
  //   return;
  //
  //   var requestOptions: any = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };
  //
  //   fetch("https://graph.facebook.com/v13.0/108761748590458/messages", requestOptions)
  //   .then(response => response.json())
  //   .then(result => console.log(result))
  //   .catch(() => this.showAlert('Intenta más tarde', 'OK'));
  // }

  lockJumps(event:any) {
    if (event.keyCode === 13) event.preventDefault();
  }

  ngOnInit(): void {
  }

}
