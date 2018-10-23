import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  private _pusher: any;

  constructor() {

    this._pusher = new Pusher('a4222240b23bd13166b7', {
      cluster: 'eu',
       forceTLS: true
    });
    }
    getPusher() {
      return this._pusher;
    }

}
