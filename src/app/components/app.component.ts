import { Component } from '@angular/core';
import { StructureConfigurationService } from '../services/configuration/structureConfigurationService';
import { Structure } from '../models/configuration/structure';
import { SectionStructure } from '../models/configuration/sectionStructure';

@Component({
    selector: 'body',
    templateUrl: 'app/views/components/app-component.html'
})

export class AppComponent {
    headerConfiguration: Structure;
    sectionConfiguration: SectionStructure;
    footerConfiguration: Structure;

    constructor (private structureConfigurationService: StructureConfigurationService) {
    }

    ngOnInit () {
        this.structureConfigurationService.getConfiguration().subscribe(config => {
            this.headerConfiguration = config.header;
            this.sectionConfiguration = config.section;
            this.footerConfiguration = config.footer;
        });
    }
}
