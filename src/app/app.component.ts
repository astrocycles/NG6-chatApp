import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from './services/chat.service';

export interface Item { id: string; name: string; }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  items: Observable<Item[]>;


constructor(
  public chatService: ChatService
  ) {}


ngOnInit() {}


}
