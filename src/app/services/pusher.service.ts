import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  private _pusher: any;

  constructor() {

    this._pusher = new Pusher('8f2a5f8e715892af2039', {
      cluster: 'eu',
      forceTLS: true
    });
    }
    getPusher() {
      return this._pusher;
    }

}
