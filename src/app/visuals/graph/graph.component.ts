import { Component, OnInit, Input, AfterViewInit, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ForceDirectedGraph } from 'src/app/d3/models';
import { D3Service } from 'src/app/d3/d3.service';

@Component({
    selector: 'aa-graph',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './graph.component.html',
    styleUrls: [
        './graph.component.scss'
    ]
})
export class GraphComponent implements OnInit, AfterViewInit
{
    @Input() nodes;
    @Input() links;
    public graph: ForceDirectedGraph;
    private _options: { width: number, height: number } = { width: 800, height: 600 };

    constructor(
        private d3Service: D3Service,
        private ref: ChangeDetectorRef
    ) { }

    ngOnInit (): void
    {
        /** Receiving an initialized simulated graph from our custom d3 service */
        this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

        /** Binding change detection check on each tick
         * This along with an onPush change detection strategy should enforce checking only when relevant!
         * This improves scripting computation duration in a couple of tests I've made, consistently.
         * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
         */
        this.graph.ticker.subscribe((d) =>
        {
            this.ref.markForCheck();
        });
    }

    ngAfterViewInit ()
    {
        this.graph.initSimulation(this.options);
    }

    @HostListener('window:resize', ['$event'])
    onResize (event)
    {
        this.graph.initSimulation(this.options);
    }

    get options ()
    {
        return this._options = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
}
