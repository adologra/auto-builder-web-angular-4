import { Component } from '@angular/core';
import { Structure } from '../../../models/configuration/structure';

@Component({
  selector: 'header[class="main-header-wrapper"]',
  inputs: ['headerConfiguration'],
  templateUrl: 'app/views/components/panels/header/headerTemplate.html'
})
export class HeaderComponent {
    headerConfiguration: Structure;
}
