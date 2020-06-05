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

  slide(data){
    console.log("clicked",data)

    console.log("this.slides",this.slides)
    this.slides  = this.slides + data

    if(this.slides == -2){
      this.slides = 1
    }

    if(this.slides == 2){
      this.slides = -1
    }
  }
}
