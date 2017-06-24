import { Component } from '@angular/core';
import { StructureConfigurationService } from '../services/configuration/structureConfigurationService';
import { Structure } from '../models/configuration/structure';

@Component({
  selector: 'body',
  templateUrl: 'app/views/components/app-component.html'
})
export class AppComponent  { 
	structures: Structure[];

	constructor(private structureConfigurationService: StructureConfigurationService) {
        console.log("hola que tal");
    }

	ngOnInit () {
        this.structureConfigurationService.getConfiguration().subscribe(structure => this.structures = structure);
	}
	 
}
