import { Component } from '@angular/core';
import { MarkdownService } from 'angular2-markdown';

@Component({
  selector: 'main[class="main-content-wrapper"]',
  templateUrl: 'app/views/components/panels/content/contentTemplate.html'
})
export class ContentComponent  { 
    constructor(private _markdown: MarkdownService) {
        console.log("markdown created");
        this.leftMenu = [];
    }

	ngOnInit () {
        var that = this;
        this._markdown.renderer.heading = function (text, level) {
            var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
            var className = '';
            if (level === 1) {
                var title = {id:'#'+escapedText};
                that.leftMenu.push(title);
                className = 'main-content-title';
            }            
            return '<h' + level + ' id="' + escapedText + '" class="' + className + '">' + 
                text + '</h' + level + '>';
        };
	}
}