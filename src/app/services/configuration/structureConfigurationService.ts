
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Structure } from '../../models/configuration/structure';
import 'rxjs/add/operator/map';

@Injectable()
export class StructureConfigurationService {
	constructor(private http: Http) {}

	getHeaderConfiguration() {
		return this.http.get('app/jsons/configurationMock.json')
					.map(response => <Structure>response.json().header);
	}

	getConfiguration() {
		return this.http.get('app/jsons/configurationMock.json')
					.map(response => <Structure[]>response.json().structure);
	}
}