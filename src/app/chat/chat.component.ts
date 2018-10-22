import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Ichat } from '../interfaces/ichat';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chats: Ichat[] = [];
  message: string;
  sending: boolean;

  constructor(
    private _chatService: ChatService
  ) { }

  ngOnInit() {

    this._chatService.getChannel().bind('chat', data => {
      if (data.email === this._chatService.user.email) {
        data.isMe = true;
      }
      this.chats.push(data);
    });
}

sendMessage(message: string) {
  this.sending = true;
  this._chatService.sendMessage(message)
    .subscribe(resp => {
      this.message = undefined;
      this.sending = false;
    }, err => {
      this.sending = false;
    } );
}

}
