import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maskCpfCnpj';
  input = "";
  get maskCpfCnpj() {
    if (this.input.length < 12) {
      return '000.000.000-000';
    } else {
      return '00.000.000/0000-99';
    }
  }

}
