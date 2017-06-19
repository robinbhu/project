import { Component, OnInit } from '@angular/core';
import { NgForm  } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
	public options = {
        position: ["top", "right"],
        timeOut: 0,
        showProgressBar: true,
        lastOnBottom: true
    };
  constructor() { }

  ngOnInit() {
  }

  addCategory(form: NgForm){
  	console.log(form);
  }

  fileChangeEvent(fileObject){
  	console.log(fileObject)
  }

}
