import { Component } from '@angular/core';
import { ItemMenu } from '../../../models/types/item.menu';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'article[class="table-content-wrapper"]',
  inputs: ['tableContentList'],
  templateUrl: 'app/views/components/panels/content/tableContentTemplate.html'
})
export class TableContentComponent  { 
    tableContentList: ItemMenu[];
    constructor() {}

	ngOnInit () {
    }
    
    getItemLiClass (level: Number): String {
        return "table-content-li-level-" + level;
    } 
}