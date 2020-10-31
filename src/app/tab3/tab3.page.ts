import { Component } from '@angular/core';
import { ContactoService } from '../../app/contacto.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public datos: any;
  constructor(public contactoService: ContactoService) {
    this.contactoService.contacto()
        .then(data => {
          this.datos = data;
          console.log(this.datos);
        });
  }
}
