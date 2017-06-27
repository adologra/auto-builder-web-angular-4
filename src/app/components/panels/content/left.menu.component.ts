import { Component } from '@angular/core';
import { ItemMenu } from '../../../models/types/item.menu';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'aside[class="left-menu-wrapper"]',
  inputs: ['leftMenuItems'],
  templateUrl: 'app/views/components/panels/content/leftMenuTemplate.html'
})
export class LeftMenuComponent  { 
    leftMenuItems: ItemMenu[];
    constructor() {}

	ngOnInit () {
    }
    
    getItemLiClass (level: Number): String {
        return "left-menu-li-level-" + level;
    } 
}