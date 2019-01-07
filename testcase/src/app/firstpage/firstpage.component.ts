import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
good:string = "this is saleem basha"
  constructor() { }

  ngOnInit() {
    console.log(this.good)

  }

}
