import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  skills = ['HTML', 'CSS', 'Photoshop', 'Bootsrap','Angular','Javascript','Typescript' ,'etc'];
  constructor() { }

  ngOnInit() {
  }

}
  