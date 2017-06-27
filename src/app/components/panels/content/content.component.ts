import { Component } from '@angular/core';
import { MarkdownService } from 'angular2-markdown';
import { ItemMenu } from '../../../models/types/item.menu';
import { LeftMenuComponent } from './left.menu.component';
import { TableContentComponent } from './table.content.component';
import { MarkdownListService } from '../../../services/content/markdownListService';
import { MarkdownOptions } from '../../../models/content/markdownOptions';

@Component({
  selector: 'section[class="main-content-wrapper"]',
  entryComponents: [ 
                LeftMenuComponent,
                TableContentComponent
            ],
  templateUrl: 'app/views/components/panels/content/contentTemplate.html'
})
export class ContentComponent  { 
    leftMenuItems: ItemMenu[];
    tableContentList: ItemMenu[];
    markdownDocumentList: MarkdownOptions[];
    markdownId : String;
    
    constructor(private _markdown: MarkdownService,
                private _markdownDocumentService: MarkdownListService) {
        
        this.leftMenuItems = new Array<ItemMenu> ();
        this.tableContentList = new Array<ItemMenu> ();
        this.markdownId = 'nodo-parent-1:2';
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
        
        this._markdownDocumentService.getMarkdownList().subscribe(markdownDocList => this.markdownDocumentList = markdownDocList);
	}
    
    private addMenuItems(escapedText: String, text: String, level: Number) {
        var title:ItemMenu = new ItemMenu();
        title.setId('#'+escapedText);
        title.setLevel(level);
        title.setText(text);
        
        if(this.leftMenuItems.filter(item => item.getId().substr(1) === escapedText).length == 0){
            this.leftMenuItems.push(title);
        }
        
        if (this.tableContentList.filter(item => item.getId().substr(1) === escapedText).length == 0) {
            this.tableContentList.push(title);
        }
    }
    
    public showTableContentList(): Boolean {
        return this.tableContentList && this.tableContentList.length > 0;
    }
    
    public showLeftMenu (): Boolean {
        return this.leftMenuItems && this.leftMenuItems.length > 0;
    }
    
    public showRightMenu (): Boolean {
        return false;
    }
    
    public getMarkDownDocumentPath(): String {
        var selectedMarkdown: MarkdownOptions;
        if (this.markdownDocumentList && this.markdownDocumentList.length > 0) {
            selectedMarkdown = this.markdownDocumentList.filter(item => item.id === this.markdownId)[0];
        }
        
        return (selectedMarkdown && selectedMarkdown.pathMdFile) || " ";
    }
}