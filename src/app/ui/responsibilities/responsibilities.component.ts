import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matCodeRound, matHandshakeRound, matPeopleAltRound, matStorageRound } from "@ng-icons/material-icons/round";

@Component( {
    selector: 'app-responsibilities',
    imports: [
        NgIcon
    ],
    viewProviders: [ provideIcons( { matPeopleAltRound, matStorageRound, matCodeRound, matHandshakeRound } ) ],
    templateUrl: './responsibilities.component.html',
    styleUrl: './responsibilities.component.scss',
} )
export class ResponsibilitiesComponent {

    responsibilities = [
        {
            emote: "matPeopleAltRound",
            heading: "Stakeholder Management",
            text: `Whether it's client requests or internal roadmaps, I can work with stakeholders to transform their
                    ideas into technical plans that are ready to develop.`
        },
        {
            emote: "matStorageRound",
            heading: "Backend Development",
            text: `Creating REST endpoints, database updates, CRON jobs, web scraping or talking to external services.
                    These are some the tasks I can get done using a variety of languages and frameworks.`
        },
        {
            emote: "matCodeRound",
            heading: "Frontend Development",
            text: `I love creating interactive experiences that solve problems for users. Both customer facing and
                    internal application work brings me lots of satisfaction.`
        },
        {
            emote: "matHandshakeRound",
            heading: "Mentoring",
            text: `  Remembering what it was like to be a junior myself has motivated me to help in any way I can. I take
                    the time to teach how to fish rather than hand out the fish.`
        },
    ]


}
