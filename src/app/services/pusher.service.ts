import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  private _pusher: any;

  constructor() {

    this._pusher = new Pusher('b8c6e73f54efdde1fa28', {
      cluster: 'eu',
      encrypted: true
    });
    }
    getPusher() {
      return this._pusher;
    }

}
