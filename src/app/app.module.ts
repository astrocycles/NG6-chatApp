import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './Ui/chat/chat.component';

// AngularFire

// pusher
import { ChatService } from './services/chat.service';
import { PusherService } from './services/pusher.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDetailsComponent } from './Ui/my-details/my-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ChatService, PusherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
