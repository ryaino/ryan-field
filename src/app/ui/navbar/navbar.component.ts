import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-navbar',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: {'class': 'rad-shadow'}

})
export class NavbarComponent {

  theme: FormControl<string | null> = new FormControl('blue-ice', Validators.requiredTrue);

  constructor() {
    this.theme.valueChanges.subscribe(theme => {
      const root = document.documentElement;
      root.setAttribute('color-scheme', theme!);
    })
  }

}
