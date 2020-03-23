import { Node } from './';

export class Link implements d3.SimulationLinkDatum<Node>
{
    index?: number;

    // Must - defining enforced implementation properties
    source: Node; // | string | number;
    target: Node; // | string | number;

    constructor(source: Node, target: Node)
    {
        this.source = source;
        this.target = target;
    }
}
