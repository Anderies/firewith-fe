import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firewith-team',
  templateUrl: './firewith-team.component.html',
  styleUrls: ['./firewith-team.component.scss']
})
export class FirewithTeamComponent implements OnInit {
  slides = 0;
  constructor() { }

  ngOnInit(): void {
  }


  onSwipeRight(event, data) {
    console.log("event", event)
    this.slides = this.slides + data

    if (this.slides == 2) {
      this.slides = 0
    }
  }

  onSwipe(evt) {
    console.log("evt", evt)
    // const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left'):'';
    // const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';
    // this.slides = this.slides + data

    // if (this.slides == 2) {
    //   this.slides = 0
    // }
  }

  onSwipeLeft(event, data) {
    console.log("event", event)
    this.slides = this.slides + data

    if (this.slides == 2) {
      this.slides = 0
    }
  }
  slide(data) {
    console.log("clicked", data)

    console.log("this.slides", this.slides)
    this.slides = this.slides + data

    if (this.slides == 2) {
      this.slides = 0
    }
  }
}
