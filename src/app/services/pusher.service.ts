import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  private _pusher: any;

  constructor() {

    this._pusher = new Pusher('a7ae1a9caa676e6f87b9', {
      cluster: 'eu',
       forceTLS: true
    });
    }
    getPusher() {
      return this._pusher;
    }

}
