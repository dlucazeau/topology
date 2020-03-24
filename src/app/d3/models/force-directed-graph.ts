import { EventEmitter } from '@angular/core';

import * as d3 from 'd3';

import { Link } from './link';
import { Node } from './node';

const FORCES = {
    LINKS: 0.05,
    COLLISION: 10,
    CHARGE: -0.2
};

export class ForceDirectedGraph
{
    public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
    public simulation: d3.Simulation<any, any>;
    public nodes: Node[] = [];
    public links: Link[] = [];

    constructor(nodes: Node[], links: Link[], options: { width: number, height: number })
    {
        this.nodes = nodes;
        this.links = links;

        this.initSimulation(options);
    }

    initSimulation (options: { width: number, height: number })
    {
        if (!options || !options.width || !options.height)
        {
            throw new Error('missing options when initializing simulation');
        }

        /** Creating the simulation */
        if (!this.simulation)
        {
            const ticker = this.ticker;

            // Creating the force simulation and defining the charges
            this.simulation = d3.forceSimulation()

                .force('charge',
                    d3.forceManyBody()
                        .strength(FORCES.CHARGE)
                )
                .force('collide',
                    d3.forceCollide()
                        .strength(FORCES.COLLISION)
                        .radius((d: Node) => d.r + 5)
                        .iterations(2)
                );

            // Connecting the d3 ticker to an angular event emitter
            this.simulation.on('tick', function ()
            {
                ticker.emit(this);
            });

            this.initNodes();
            this.initLinks();
        }

        /** Updating the central force of the simulation */
        this.simulation.force('centers', d3.forceCenter(options.width / 2, options.height / 2));

        /** Restarting the simulation internal timer */
        this.simulation.restart();
    }

    initNodes ()
    {
        if (!this.simulation)
        {
            throw new Error('simulation was not initialized yet');
        }

        this.simulation.nodes(this.nodes);
    }

    initLinks ()
    {
        if (!this.simulation)
        {
            throw new Error('simulation was not initialized yet');
        }

        // Initializing the links force simulation
        this.simulation.force('links',
            d3.forceLink(this.links)
                .strength(FORCES.LINKS)
        );
    }
}
