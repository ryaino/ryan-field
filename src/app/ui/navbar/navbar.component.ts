import { Component, computed, effect, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matMenuRound, matCloseRound } from '@ng-icons/material-icons/round';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule, NgIcon, RouterLink],
  viewProviders: [provideIcons({ matMenuRound, matCloseRound })],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: { class: 'rad-shadow' },
})
export class NavbarComponent {
  theme: FormControl<string | null> = new FormControl(
    'blue-ice',
    Validators.requiredTrue,
  );

  checkbox: FormControl<boolean | null> = new FormControl(false);
  checkboxValue = toSignal(this.checkbox.valueChanges);

  menuClass = computed(() => (this.checkboxValue() ? 'open' : 'closed'));

  stateChange = effect(() => {
    if (this.checkboxValue()) {
      this.document.body.style.overflow = 'hidden';
    } else {
      this.document.body.style.overflow = 'auto';
    }
  });

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
  ) {
    this.theme.valueChanges.subscribe((theme) => {
      const root = document.documentElement;
      root.setAttribute('color-scheme', theme!);
    });

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.checkbox.setValue(false);
      }
    });
  }
}
