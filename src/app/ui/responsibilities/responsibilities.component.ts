import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matCodeRound, matPeopleAltRound, matStorageRound, matHandshakeRound } from "@ng-icons/material-icons/round";

@Component({
  selector: 'app-responsibilities',
  imports: [
    NgIcon
  ],
  viewProviders: [provideIcons({matPeopleAltRound, matStorageRound, matCodeRound, matHandshakeRound})],
  templateUrl: './responsibilities.component.html',
  styleUrl: './responsibilities.component.scss',
})
export class ResponsibilitiesComponent {

}
