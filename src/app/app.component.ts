import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
// import {
//   Auth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword
// } from '@angular/fire/auth'
import { response } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  template: `
    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Generosity';
  // constructor(public auth: Auth) {

  // }

  ngOnInit(): void {
    initFlowbite();
  }

  // handleSignUp(value: any) {
  //   createUserWithEmailAndPassword(this.auth, value.email, value.password)
  //     .then((response: any) => {
  //       console.log(response.user);
  //       alert(`User with email ${value.email} registered successfully.`);
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     })
  // }

  // handleOnSubmit(value: any) {
  //   signInWithEmailAndPassword(this.auth, value.email, value.password)
  //     .then((response: any) => {
  //       console.log(response.user);
  //       alert(`User with email ${value.email} logged in successfully.`)
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //       console.log("USer could not register.");

  //     })
  // }
}
