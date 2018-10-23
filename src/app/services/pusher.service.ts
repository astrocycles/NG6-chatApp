import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  private _pusher: any;

  constructor() {

    this._pusher = new Pusher('ab8d04825de69ffb0c6d', {
      cluster: 'eu',
       forceTLS: true
    });
    }
    getPusher() {
      return this._pusher;
    }

}
