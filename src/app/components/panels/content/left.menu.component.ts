import { Component, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { ItemMenu } from '../../../models/types/item.menu';
import { Structure } from '../../../models/configuration/structure';
import { MarkdownOptions } from '../../../models/content/markdownOptions';
import { StructureConfigurationService } from '../../../services/configuration/structureConfigurationService';


@Component({
  selector: 'aside[class="left-menu-wrapper"]',
  inputs: [
      'leftMenuItems',
      'leftStructure',
      'listSubMenuItems'
  ],
  outputs: [
      'onSelectMarkdown'
  ],
  templateUrl: 'app/views/components/panels/content/leftMenuTemplate.html'
})

export class LeftMenuComponent implements OnChanges {
    onSelectMarkdown: EventEmitter<string>;
    leftMenuItems: ItemMenu[];
    leftStructure: Structure;
    listMenuItems: Structure[];
    listSubMenuItems: MarkdownOptions[];
    changeLog: string[] = [];

    constructor(private _structureConfigService: StructureConfigurationService) {
        this.onSelectMarkdown = new EventEmitter<string> ();
    }

    ngOnInit () {}

    ngOnChanges (changes: {[propKey: string]: SimpleChange}) {
        let log: string[] = [];
        for (let propName in changes) {
          let changedProp = changes[propName];
          let to = JSON.stringify(changedProp.currentValue);
          if (changedProp.isFirstChange()) {
            this._structureConfigService.getListStructureConfiguration(this.leftStructure.itemFile)
            .subscribe(listItem => this.listMenuItems = listItem);
            log.push(`Initial value of ${propName} set to ${to}`);
          } else {
            let from = JSON.stringify(changedProp.previousValue);
            log.push(`${propName} changed from ${from} to ${to}`);
          }
        }
        this.changeLog.push(log.join(', '));
    }

    onClick (id: string) {
        this.onSelectMarkdown.emit(id);
    }

    getSubMenuItems (parentId: string):MarkdownOptions[] {
        if (this.listSubMenuItems){
            return this.listSubMenuItems.filter( item => item.nodeParentId === parentId );
        } else {
            return [];
        }
    }

    getItemLiClass (level: Number): String {
        return 'left-menu-li-level-' + level;
    }
}
