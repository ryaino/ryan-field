import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component( {
    selector: 'app-theme',
    standalone: true,
    imports: [ ReactiveFormsModule ],
    template: `
        <main>
            <section>
                <div class="surface-samples">
                    <div class="surface-1 rad-shadow">1</div>
                    <div class="surface-2 rad-shadow">2</div>
                    <div class="surface-3 rad-shadow">3</div>
                    <div class="surface-4 rad-shadow">4</div>
                </div>
            </section>

            <section>
                <div class="text-samples">
                    <h1 class="text-1">
                        <span class="swatch brand rad-shadow"></span>
                        Brand
                    </h1>
                    <h1 class="text-1">
                        <span class="swatch text-1 rad-shadow"></span>
                        Text Color 1
                    </h1>
                    <h1 class="text-2">
                        <span class="swatch text-2 rad-shadow"></span>
                        Text Color 2
                    </h1>
                    <br>
                    <p class="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p class="text-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.
                    </p>
                </div>
            </section>
        </main>

        <input [formControl]="color" type="color" id="body" name="body"/>
    `,
    styles: `
        * {
            box-sizing: border-box;
            margin: 0;
        }

        html {
            block-size: 100%;
            background-color: var(--surface-1);
            color: var(--text-1);
            accent-color: var(--brand);
        }

        body {
            min-block-size: 100%;
            font-family: system-ui, sans-serif;
            padding: var(--size-6);
            display: grid;
            place-content: center;
            gap: var(--size-6);
        }

        main {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            align-content: center;
            justify-content: center;
            gap: var(--size-10);
        }

        section {
            display: grid;
            gap: var(--size-6);
        }

        h1 {
        }

        p {
            max-inline-size: var(--size-content-1);
            font-size: var(--font-size-4);
            line-height: var(--font-lineheight-3);
        }

        header {
            display: inline-grid;
            gap: var(--size-3);
        }

        form {
            display: flex;
            gap: var(--size-5);

            & > div {
                display: inline-flex;
                align-items: center;
                gap: var(--size-2);
            }
        }

        .surface-samples {
            display: grid;
            --size: var(--size-content-1);
            grid-template-columns: var(--size) var(--size);
            grid-auto-rows: var(--size);
            gap: var(--size-5);

            @media (width <= 480px) {
                & {
                    --size: 40vw;
                }
            }

            & > * {
                border-radius: var(--radius-3);
                display: grid;
                place-content: center;
                font-size: var(--font-size-8);
            }
        }

        .text-samples {
            display: grid;
            gap: var(--size-4);

            & > h1 {
                font-size: var(--font-size-6);
                display: inline-flex;
                align-items: center;
                gap: var(--size-3);
            }
        }

        .brand {
            color: var(--brand);
            background-color: var(--brand);
        }


        .swatch {
            display: inline-block;
            flex-shrink: 0;
            inline-size: var(--size-8);
            block-size: var(--size-8);
            border-radius: var(--radius-round);

            &.text-1 {
                background-color: var(--text-1);
            }

            &.text-2 {
                background-color: var(--text-2);
            }
        }
    `,
} )
export default class ThemeComponent {

    public color = new FormControl();

    constructor() {
        this.color.valueChanges.subscribe( color => {
            const root = document.documentElement;
            root.style.setProperty( '--brand', color );
        } )
    }
}
