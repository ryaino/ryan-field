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
            window.scrollTo( 0, document.body.scrollHeight );

            tools.forEach((tool, index) => {
                setTimeout( () => {
                    const body = this.matterService.createCircle( 350 + index, 0, 40, {
                        restitution: 0.5,
                        render: {
                            sprite: {
                                texture: `/src/assets/logos/logo_${ tool }.png`,
                                xScale: 0,
                                yScale: 0
                            }
                        }
                    } );
                    this.matterService.addBodies( [ body ] )
                }, index * 500 )
            })
        } )
    }
}


const tools = [ 'angular', 'aws', 'docker', 'dotnet', 'firebase', 'gcp', 'gitlab', 'graphql', 'hasura', 'ibm',
    'javascript', 'jenkins', 'jira', 'jsp', 'kafka', 'kubernetes', 'microservices', 'nest', 'postgres', 'react', 'spring',
    'tailwind', 'typescript', 'veracode', 'wsl' ]
