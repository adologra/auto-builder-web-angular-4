
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MarkdownOptions } from '../../models/content/markdownOptions';
import 'rxjs/add/operator/map';

@Injectable()
export class MarkdownListService {
	constructor(private http: Http) {}

	getMarkdownList() {
		return this.http.get('dist/app/jsons/markdownList.json')
					.map(response => <MarkdownOptions[]>response.json());
	}
}