import * as d3 from 'd3';
export class Node implements d3.SimulationNodeDatum
{
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
    id: string;
    linkCount: number = 0;
    protected _r: number;
    protected _fontSize: number;

    constructor(id: string)
    {
        this.id = id;
    }

    get r ()
    {
        return this._r;
    }

    get fontSize ()
    {
        return this._fontSize;
    }

    get color ()
    {
        return 'rgb(176,212,243)';
    }
}

export class NodeEntity extends Node
{
    constructor(id: string)
    {
        super(id);

        this._r = 75;
        this._fontSize = 16;
    }
}

export class NodeAppli extends Node
{
    constructor(id: string)
    {
        super(id);

        this._r = 60;
        this._fontSize = 14;
    }
}

export class NodeRole extends Node
{
    constructor(id: string)
    {
        super(id);

        this._r = 45;
        this._fontSize = 12;
    }
}

export class NodeUser extends Node
{
    constructor(id: string)
    {
        super(id);

        this._r = 30;
        this._fontSize = 10;
    }
}
