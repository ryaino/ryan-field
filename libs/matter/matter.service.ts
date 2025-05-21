import { Injectable } from '@angular/core';
import Matter, { IBodyDefinition } from 'matter-js';

@Injectable( {
    providedIn: 'root'
} )
export class MatterService {

    public engine: Matter.Engine | undefined;
    public render: Matter.Render | undefined;
    public runner: Matter.Runner | undefined;
    public canvasRect: DOMRect | undefined;

    private preparedBodies: Matter.Body[] = [];

    constructor() {
    }

    public get canvasHeight() {
        return this.canvasRect!.height
    }

    public get canvasWidth() {
        return this.canvasRect!.width
    }

    public init( canvas: HTMLCanvasElement ) {
        this.canvasRect = canvas.getBoundingClientRect();
        canvas.width = this.canvasRect.width;
        canvas.height = this.canvasRect.height
        this.engine = Matter.Engine.create();
        this.render = Matter.Render.create( {
            canvas: canvas,
            engine: this.engine,
            options: {
                width: this.canvasRect.width,
                height: this.canvasRect.height,
                wireframes: false,
            }
        } )
        this.preparedBodies = [];

    }

    createBodies() {
        const options = {
          isStatic: true
        };

        const width = this.canvasRect!.width;
        const height = this.canvasRect!.height;
        const thickness = 10;
        const exposure = 1;
        const midWidth = width / 2;
        const midHeight = height / 2;

        const ground = Matter.Bodies.rectangle( midWidth, height + thickness /2, width, thickness, options );
        const leftWall = Matter.Bodies.rectangle( + thickness /2 * -1, midHeight - exposure * 2, thickness, height, options );
        const rightWall = Matter.Bodies.rectangle( width + thickness /2, midHeight - exposure * 2, thickness, height, options );
        this.addBodies( [ leftWall, rightWall, ground ] );
    }

    public addBodies( bodies: any[] ) {
        Matter.Composite.add( this.engine!.world, [ ...bodies ] );
    }

    public runRender() {
        Matter.Render.run( this.render! );
    }

    public runEngine() {
        this.runner = Matter.Runner.create();
        Matter.Runner.run( this.runner, this.engine! );
    }

    public createCircle( x: number, y: number, radius: number, options?: IBodyDefinition, maxSides?: number ) {
        return Matter.Bodies.circle( x, y, radius, options, maxSides );
    }

    prepareBody( body: Matter.Body ) {
        this.preparedBodies.push( body );
    }

    addPreparedBodies( difference: number ) {
        this.preparedBodies.forEach( ( body, index ) => {
            setTimeout( () => {
                this.addBodies( [ body ] )
            }, index * difference )
        } );
        this.preparedBodies = [];
    }

}
