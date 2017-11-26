import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-contact',
  templateUrl: './map-contact.component.html',
  styleUrls: ['./map-contact.component.scss']
})
export class MapContactComponent implements OnInit {
  name = '';
  email = '';
  message = '';

  frmSubmit(){
   alert('Thank You ' + this.name + '. \n' + 'Your email is: ' + this.email + '. \n' +  'We got your message: ' + this.message )
  }

  constructor() { }

  ngOnInit() {
    
  }

}
