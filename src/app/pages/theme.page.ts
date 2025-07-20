import { Component, QueryList, ViewChildren } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component( {
    selector: 'app-theme',
    standalone: true,
    imports: [ ReactiveFormsModule ],
    template: `
      <form [formGroup]="form">
        <main>
          <h3>Theme Customizer</h3>
          <p>
            The General layout of this page and the approach I used for theming
            the
            site was taken from <a
            href="https://codepen.io/argyleink/pen/XWaYyWe">this</a> Open Props
            demo.
            <br />
            Click on a surface or text colour you want to change and you'll see
            your selection applied across the entire site.
          </p>
          <div class="content">
            <section>
              <div class="surface-samples">
                <label class="surface-1 rad-shadow">1
                  <input formControlName="surface-1" type="color" />
                </label>

                <label class="surface-2 rad-shadow">2
                  <input formControlName="surface-2" type="color" />
                </label>
                <label class="surface-3 rad-shadow">3
                  <input formControlName="surface-3" type="color" />
                </label>
                <label class="surface-4 rad-shadow">4
                  <input formControlName="surface-4" type="color" />
                </label>
              </div>
            </section>

            <section>
              <div class="text-samples">
                <h1 class="text-brand">
                  <label>
                    <span class="swatch brand rad-shadow"></span>
                    Brand
                    <input formControlName="brand" type="color" />
                  </label>
                </h1>
                <h1 class="text-1">
                  <label>
                    <span class="swatch text-1 rad-shadow"></span>
                    Text Color 1
                    <input formControlName="text-1" type="color" />
                  </label>
                </h1>
                <h1 class="text-2">
                  <label>
                    <span class="swatch text-2 rad-shadow"></span>
                    Text Color 2
                    <input formControlName="text-2" type="color" />
                  </label>
                </h1>
                <br>
                <p class="text-1">Lorem ipsum dolor sit amet, consectetur
                  adipiscing
                  elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <p class="text-2">Ut enim ad minim veniam, quis nostrud
                  exercitation
                  ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </p>
              </div>
            </section>
          </div>
        </main>
        <input formControlName="surface-3" type="color" id="surface-3" />
        <input formControlName="surface-4" type="color" id="surface-4" />
        <input formControlName="text-1" type="color" id="text-1" />
        <input formControlName="text-2" type="color" id="text-2" />
      </form>

    `,
    styles: `

      input {
        visibility: hidden;
      }

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


      main {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        align-content: center;
        justify-content: center;
        gap: var(--size-9);
      }

      .content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        justify-content: center;
        gap: var(--size-9);

        p {
          max-inline-size:  var(--size-content-1);
        }
      }

      section {
        display: grid;
        gap: var(--size-6);
      }

      h1 {
      }

      p {
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

    form = this.fb.group({
      "surface-1": '',
      "surface-2": '',
      "surface-3": '',
      "surface-4": '',
      brand: '',
      "text-1": '',
      "text-2": '',
    })

    constructor(private fb: FormBuilder) {
      this.form.valueChanges.subscribe(val => {
        if(!val) return
        const keys = Object.entries(val).forEach(([key, value]) => {
          const root = document.documentElement;
          root.style.setProperty( `--${key}`, value! );
        });
      })
    }

}
