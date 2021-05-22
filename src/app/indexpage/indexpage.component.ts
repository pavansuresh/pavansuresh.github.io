import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser'; 
@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.css']
})
export class IndexpageComponent implements OnInit {
    constructor(private http: HttpClient) { }
    ngOnInit() {
     }
     textfile: {};
     getData(){
     this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data=>{this.textfile = data})
     }
}
