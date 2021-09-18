import { AuthenticationService } from './../shared/services/authentication.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../Models/message';
import { MessagesService } from '../shared/services/messages.service';
import { User } from '../Models/User';
import { NgForm } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() profile: User;

messages : Message [];
username : string;
user : User;
messageContent : string;
source = interval(500);
useremail = localStorage.getItem('email');
recipient = this.route.snapshot.paramMap.get('uName');
subscription = this.source.subscribe(val => this.loadMessages());

  constructor( private route: ActivatedRoute, private messagesService : MessagesService, private userService : AuthenticationService) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.loadMessages;
    this.loadUser;
  }
  loadMessages(){

    this.userService.getUser(this.useremail).subscribe(user => {
      this.user = user;
      /* console.log(user); */})
    this.messagesService.getMessageThread(this.route.snapshot.paramMap.get('uName'),this.useremail).subscribe(messages =>{
      this.messages = messages,() => console.log("Failure");
      /* console.log(this.messages); */

    })

  }
  loadUser(){

   this.userService.getUser(this.useremail).subscribe(user => {
     this.user = user,() => console.log("Failure");
     console.log(user);
     console.log(this.user);
     this.messagesService.getMessageThread(this.route.snapshot.paramMap.get('uName'),this.useremail).subscribe(messages =>{
      this.messages = messages,() => console.log("Failure");
      console.log(this.messages);
    })

   })
}

sendMessage(){
  this.useremail = localStorage.getItem('email');

  this.messagesService.sendMessage(this.recipient,this.messageContent,this.useremail).subscribe(message =>{
    this.messages.push(message),() => console.log("Failure");

  })
}
}
