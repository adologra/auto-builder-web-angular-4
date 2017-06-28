import { Component } from '@angular/core';
import { Structure } from '../../../models/configuration/structure';

@Component({
  selector: 'footer[class="main-footer-wrapper"]',
  inputs: ['footerConfiguration'],
  templateUrl: 'app/views/components/panels/footer/footerTemplate.html'
})
export class FooterComponent {
    footerConfiguration: Structure;
}
