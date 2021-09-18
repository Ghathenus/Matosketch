import { ChatDto } from './../_interfaces/chatDto.model';
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../shared/services/chat.service';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.scss']
})
export class ChattingComponent implements OnInit {

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.retrieveMappedObject().subscribe( (receivedObj: ChatDto) => { this.addToInbox(receivedObj);});  // calls the service method to get the new messages sent

  }

  msgDto: ChatDto = new ChatDto();
  msgInboxArray: ChatDto[] = [];

  send(): void {
    if(this.msgDto) {
      if(this.msgDto.user.length == 0 || this.msgDto.user.length == 0){
        window.alert("Both fields are required.");
        return;
      } else {
        this.chatService.broadcastMessage(this.msgDto);                   // Send the message via a service
      }
    }
  }

  addToInbox(obj: ChatDto) {
    let newObj = new ChatDto();
    newObj.user = obj.user;
    newObj.msgText = obj.msgText;
    this.msgInboxArray.push(newObj);

  }
}
