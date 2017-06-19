import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm  } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public options = {
        position: ["top", "right"],
        timeOut: 0,
        showProgressBar: true,
        lastOnBottom: true
    };
  constructor(private notificationsService: NotificationsService, private router: Router, private routes: ActivatedRoute) { 

  }

  ngOnInit() {
  	firebase.initializeApp({
         apiKey: "AIzaSyCZEcgjKkgKKvv26-dFjRnadUF0PirQ-80",
         authDomain: "authentication-e11e7.firebaseapp.com",
         databaseURL: "https://authentication-e11e7.firebaseio.com",
         projectId: "authentication-e11e7",
         storageBucket: "authentication-e11e7.appspot.com",
         messagingSenderId: "647937281865"
       });
  }

  login(form: NgForm){
  	let email = form.value.email;
  	let password = form.value.password;
	firebase.auth().signInWithEmailAndPassword(email, password).then((res)=>{
		console.log(res);
		this.notificationsService.success(
            'Congrts!!',
            'You have loggedin successfully'
        );
        this.router.navigate(['home'], {relativeTo: this.routes})
	}).catch((err)=>{
		console.log(err);
		this.notificationsService.error(
            'opps!!',
            err.message
        );
	});
}

}
