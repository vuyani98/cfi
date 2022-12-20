import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition, query, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  animations: [

    trigger('burgerMenu', [

      transition('straight => angled',[

        group([

        query('#line1', [
            animate('700ms  ease-out', keyframes([
              style({ transform: "translateY(0px)", offset: 0 }),
              style({ transform: "translateY(8px)", offset: 0.5}),
              style({ transform: "translate(0px, 8px) rotate(45deg)", offset: 1})
            ]))
          ]
        ),

        query('#line2', [
            animate('350ms ease-out', keyframes([
              style({ opacity: 1, offset: 0}),
              style({ opacity: 0, offset: 1})
            ]))
        ]
        ),

        query('#line3',
            animate('700ms ease-out', keyframes([
              style({ transform: "translateY(0px)", offset: 0 }),
              style({ transform: "translateY(-8px)", offset: 0.5}),
              style({ transform: "translate(0px, -8px) rotate(-45deg)", offset: 1})
            ]))
        ),

        query('#glass',
          animate('350ms ease-out', keyframes([
            style({ transform: 'translateX(400px)', offset: 0 }),
            style({ transform: 'translateX(200px)', offset: 0.5 }),
            style({ transform: 'translateX(0px)', offset: 1}),
          ]))
        ),

        ])

      ]),

      transition('angled => straight',[

        group([

        query('#line1', [
            animate('700ms  ease-out', keyframes([
              style({ transform: "translateY(8px)", offset: 0 }),
              style({ transform: "translateY(0px)", offset: 0.5}),
              style({ transform: "translate(0px, 0px) rotate(0deg)", offset: 1})
            ]))
          ]
        ),

        query('#line2', [
            animate('350ms ease-out', keyframes([
              style({ opacity: 0, offset: 0}),
              style({ opacity: 1, offset: 1})
            ]))
        ]
        ),

        query('#line3',
            animate('700ms ease-out', keyframes([
              style({ transform: "translateY(-8px)", offset: 0 }),
              style({ transform: "translateY(0px)", offset: 0.5}),
              style({ transform: "translate(0px, 0px) rotate(0deg)", offset: 1})
            ]))
        ),

        query('#glass',
          animate('500ms ease-out', keyframes([
            style({ transform: 'translateX(0px)', offset: 0 }),
            style({ transform: 'translateX(200px)', offset: 0.5 }),
            style({ transform: 'translateX(400px)', offset: 1}),
          ]))
        ),

        ])

      ])

    ])
  ]
})
export class NavbarComponent implements OnInit {

  color : string = '';
  state: string = 'straight';
  straight: boolean = true;
  display: string = 'none';

  constructor( private route: Router) {}

  ngOnInit(): void {

    this.route.events.subscribe(event => {
      console.log(event)
      this.state = 'straight';
      this.straight = true;
      this.display = 'none'
    })
  }

  //function opens and closes menu
  openClose() {

    if (this.state === 'straight') {
      this.state = 'angled';
      this.straight = false;
      this.display = 'block';
    }

    else{
      this.state = 'straight';
      this.straight = true;
      this.display = 'none';
    }
  }

}
