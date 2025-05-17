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

    constructor() {
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

    }

    createBodies() {
        let r = document.querySelector( ':root' );
        let rs = getComputedStyle( r! );
        const options = {
            isStatic: true,
            render: {
                strokeStyle: rs.getPropertyValue( '--brand' )
            }
        };


        const ground = Matter.Bodies.rectangle( this.canvasRect!.width / 2 - 2, this.canvasRect!.height + 4, this.canvasRect!.width, 10, options );
        const leftWall = Matter.Bodies.rectangle( -4, this.canvasRect!.height / 2 - 2, 10, this.canvasRect!.height, options );
        const rightWall = Matter.Bodies.rectangle( this.canvasRect!.width + 4, this.canvasRect!.height / 2 - 2, 10, this.canvasRect!.height, options );
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

    public createCircle(x: number, y: number, radius: number, options?: IBodyDefinition, maxSides?: number) {
        return Matter.Bodies.circle(x, y, radius, options, maxSides);
    }
}
