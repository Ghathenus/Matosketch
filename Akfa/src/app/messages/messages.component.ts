import { MessagesService } from './../shared/services/messages.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../Models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
useremail : string;
inmessages : Message[];
outmessages : Message[];
container : 'Unread'
  constructor(private messagesService : MessagesService) { }

  ngOnInit(): void {
    this.loadInbox();
    this.loadOutbox();
  }
loadInbox(){
  this.useremail = localStorage.getItem('email');
this.messagesService.getUserInbox(this.useremail).subscribe(messages => {
  this.inmessages = messages;
  console.log(this.inmessages);
})
}
loadOutbox(){
  this.useremail = localStorage.getItem('email');
this.messagesService.getUserOutbox(this.useremail).subscribe(messages => {
  this.outmessages = messages;
  console.log(this.outmessages);
})
}
}
