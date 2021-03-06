import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'registrazione',
  template: `
    <navbar></navbar>
    
    <registrationwizard></registrationwizard>
    
    <footer></footer>
  `,
  styleUrls: [
    '../app.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})

export class RegistrazioneComponent {}
