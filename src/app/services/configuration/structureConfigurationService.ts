
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Structure } from '../../models/configuration/structure';
import { SectionStructure } from '../../models/configuration/sectionStructure';
import { MainStructure } from '../../models/configuration/mainStructure';
import 'rxjs/add/operator/map';

@Injectable()
export class StructureConfigurationService {
    jsonsUrl: String;
    constructor(private http: Http) {
        this.jsonsUrl = 'dist/app/jsons/';
    }

    getHeaderConfiguration(): Observable<Structure> {
        return this.http.get( this.jsonsUrl + 'configurationMock.json' ).map(response => <Structure>response.json().header);
    }

    getSectionConfiguration(): Observable<SectionStructure> {
        return this.http.get(this.jsonsUrl + 'configurationMock.json').map(response => <SectionStructure>response.json().section);
    }

    getFooterConfiguration(): Observable<Structure> {
        return this.http.get(this.jsonsUrl + 'configurationMock.json').map(response => <Structure>response.json().footer);
    }

    getConfiguration(): Observable<MainStructure> {
        return this.http.get(this.jsonsUrl + 'configurationMock.json').map(response => <MainStructure>response.json());
    }

    getListStructureConfiguration(nameStructure: string): Observable<Structure[]> {
        return this.http.get( this.jsonsUrl.concat(nameStructure) ).map(response => <Structure[]>response.json());
    }
}
