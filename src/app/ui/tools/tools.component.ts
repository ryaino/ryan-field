import { afterNextRender, Component, ElementRef, ViewChild } from '@angular/core';
import { MatterService } from "../../../../libs/matter/matter.service";

@Component( {
    selector: 'app-tools',
    imports: [],
    templateUrl: './tools.component.html',
    styleUrl: './tools.component.scss'
} )
export class ToolsComponent {

    @ViewChild( 'canvas' )
    canvas: ElementRef<HTMLCanvasElement> | undefined;

    constructor( private matterService: MatterService ) {

        afterNextRender( () => {
            let el = this.canvas!.nativeElement
            matterService.init( el );
            matterService.createBodies();
            matterService.runRender();
            matterService.runEngine();
            // window.scrollTo( 0, document.body.scrollHeight );

            tools.forEach((tool, index) => {
                setTimeout( () => {
                    const image = new Image();
                    image.onload = () => {
                        const body = this.matterService.createCircle( this.matterService.canvasWidth, 0, this.matterService.canvasWidth / 26, {
                            restitution: 0.59,
                            frictionAir: 0.001,
                            density: 0.01,
                            force: {
                                x: this.matterService.canvasWidth / 26 /-40,
                                y: 0
                            },
                            render: {
                                sprite: {
                                    texture: image.src,
                                    xScale: this.matterService.canvasWidth / 26 / 20,
                                    yScale: this.matterService.canvasWidth / 26 / 20
                                }
                            }
                        } );
                        this.matterService.addBodies( [ body ] )
                    };
                    image.src = `/src/assets/logos/logo_${ tool }.png`;

                }, index * 500 )
            })
        } )
    }
}


const tools = [ 'angular', 'aws', 'docker', 'dotnet', 'firebase', 'gcp', 'gitlab', 'graphql', 'hasura', 'ibm',
    'javascript', 'jenkins', 'jira', 'jsp', 'kafka', 'kubernetes', 'microservices', 'nest', 'postgres', 'react', 'spring',
    'tailwind', 'typescript', 'veracode', 'wsl' ]
