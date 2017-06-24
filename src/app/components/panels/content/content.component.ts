import { Component } from '@angular/core';
import { MarkdownService } from 'angular2-markdown';

@Component({
  selector: 'main[class="main-content-wrapper"]',
  templateUrl: 'app/views/components/panels/content/contentTemplate.html'
})
export class ContentComponent  { 
    constructor(private _markdown: MarkdownService) {
        console.log("markdown created");
    }

	ngOnInit () {
        
	}
}