import { Component, OnInit, Input } from '@angular/core';

import { Node } from '../../../d3/models';

@Component({
    selector: '[aaNodeVisual]',
    templateUrl: './node-visual.component.html',
    styleUrls: [
        './node-visual.component.scss'
    ]
})
export class NodeVisualComponent implements OnInit
{
    // tslint:disable-next-line: no-input-rename
    @Input('aaNodeVisual') node: Node;

    constructor() { }

    ngOnInit (): void
    {
    }
}
