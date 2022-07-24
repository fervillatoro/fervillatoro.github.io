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
    msg: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Záéíóúñ!¡¿?%$0-9\\s]+")]),
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
    let urlApiCallMeBot = `https://api.callmebot.com/text.php?user=@villatoro_io&text=${encodeURIComponent(prepareMsg)}`;

    await fetch(urlApiCallMeBot).then(res => res.text())
    .then(result => {
      console.log(result);
      this.showAlert('Mensaje enviado', 'OK');
      this.frmContact.reset();
    })
    .catch(() => this.showAlert('Intenta más tarde', 'OK'));
    this.isLoad = false;
  }

  showAlert(message: string, action = '', config?: MatSnackBarConfig) {
    return this.snackBar.open(message, action, { duration: 3000, ...config });
  }

  ngOnInit(): void {
  }

}
