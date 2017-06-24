import { Component } from '@angular/core';
import { MarkdownService } from 'angular2-markdown';
import { ItemMenu } from '../../../models/types/item.menu';
import { LeftMenuComponent } from './left.menu.component';

@Component({
  selector: 'section[class="main-content-wrapper"]',
  entryComponents: [ 
                LeftMenuComponent
            ],
  templateUrl: 'app/views/components/panels/content/contentTemplate.html'
})
export class ContentComponent  { 
    leftMenuItems: ItemMenu[];
    constructor(private _markdown: MarkdownService) {
        console.log("markdown created");
        this.leftMenuItems = new Array<ItemMenu> ();
    }

	ngOnInit () {
        var that = this;
        this._markdown.renderer.heading = function (text: String, level: Number) {
            var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
            var className = '';
            that.addMenuItems(escapedText, text, level);
            if (level === 1) {
                className = 'main-content-title';
            }            
            return '<h' + level + ' id="' + escapedText + '" class="' + className + '">' + 
                text + '</h' + level + '>';
        };
        
        
	}
    
    private addMenuItems(escapedText: String, text: String, level: Number) {
        var title:ItemMenu = new ItemMenu();
        title.setId('#'+escapedText);
        title.setLevel(level);
        title.setText(text);
        this.leftMenuItems.push(title);
    }
    
    public showLeftMenu (): Boolean {
        return this.leftMenuItems && this.leftMenuItems.length > 0;
    }
    
    public showRightMenu (): Boolean {
        return false;
    }
}