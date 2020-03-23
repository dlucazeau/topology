import { Directive, OnInit, Input, ElementRef } from '@angular/core';
import { D3Service } from '../d3.service';

@Directive({
    selector: '[aaZoomable]'
})
export class ZoomableDirective implements OnInit
{
    @Input() aaZoomable: ElementRef;

    constructor(private d3Service: D3Service, private _element: ElementRef) { }

    ngOnInit ()
    {
        this.d3Service.applyZoomableBehaviour(this.aaZoomable, this._element.nativeElement);
    }
}
