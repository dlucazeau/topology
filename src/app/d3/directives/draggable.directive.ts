import { Directive, OnInit, Input, ElementRef } from '@angular/core';

import { Node, ForceDirectedGraph } from '../models';
import { D3Service } from '../d3.service';

@Directive({
  selector: '[aaDraggable]'
})
export class DraggableDirective implements OnInit
{
    @Input() aaDraggable: Node;
    @Input() draggableInGraph: ForceDirectedGraph;

    constructor(
        private d3Service: D3Service,
        private element: ElementRef
    ) { }

    ngOnInit ()
    {
        this.d3Service.applyDraggableBehaviour(this.element.nativeElement, this.aaDraggable, this.draggableInGraph);
    }

}
