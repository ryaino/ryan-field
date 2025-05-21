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

            tools.forEach( ( tool ) => {
                const image = new Image();
                image.onload = () => {

                    const canvasWidth = this.matterService.canvasWidth;
                    const scaledSize = canvasWidth / 26;


                    const body = this.matterService.createCircle(
                          Math.random() * (canvasWidth - scaledSize) + scaledSize,
                        0,
                        scaledSize,
                        {
                            restitution: 0.8,
                            force: {
                                x: 0,
                                y: canvasWidth / 1024 * 0.01
                            },
                            render: {
                                sprite: {
                                    texture: image.src,
                                    xScale: scaledSize / 20,
                                    yScale: scaledSize / 20
                                }
                            }
                        } );
                    this.matterService.prepareBody( body );
                };
                image.src = `/src/assets/logos/logo_${ tool }.png`;
            } )
        } )
    }

    playAnimation() {
        this.matterService.addPreparedBodies( 300 );
    }
}


const tools = [ 'angular', 'aws', 'docker', 'dotnet', 'firebase', 'gcp', 'gitlab', 'graphql', 'hasura', 'ibm',
    'javascript', 'jenkins', 'jira', 'jsp', 'kafka', 'kubernetes', 'microservices', 'nest', 'postgres', 'react', 'spring',
    'tailwind', 'typescript', 'veracode', 'wsl' ]
