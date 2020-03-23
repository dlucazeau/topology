import { Component, OnInit, Input } from '@angular/core';

import { Link } from 'src/app/d3/models';

@Component({
    selector: '[aaLinkVisual]',
    templateUrl: './link-visual.component.html',
    styleUrls: [
        './link-visual.component.scss'
    ]
})
export class LinkVisualComponent implements OnInit
{
    // tslint:disable-next-line: no-input-rename
    @Input('aaLinkVisual') link: Link;
    constructor() { }

    ngOnInit (): void
    {
    }
}
