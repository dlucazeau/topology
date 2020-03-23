import { Component } from '@angular/core';

import APP_CONFIG from './app.config';
import { Node, Link } from './d3/models';

@Component({
    selector: 'aa-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss'
    ]
})
export class AppComponent
{
    nodes: Node[] = [];
    links: Link[] = [];
    title = 'topology';

    constructor()
    {
        const N = APP_CONFIG.N,
            getIndex = (n: number) => n - 1;

        /** constructing the nodes array */
        for (let i = 1; i <= N; i++)
        {
            this.nodes.push(new Node(i.toString()));
        }

        for (let i = 1; i <= N; i++)
        {
            for (let m = 2; i * m <= N; m++)
            {
                /** increasing connections toll on connecting nodes */
                this.nodes[getIndex(i)].linkCount++;
                this.nodes[getIndex(i * m)].linkCount++;

                /** connecting the nodes before starting the simulation */
                this.links.push(new Link(this.nodes[getIndex(i)], this.nodes[getIndex(i * m)]));
            }
        }
    }
}
