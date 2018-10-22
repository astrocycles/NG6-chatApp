import { Injectable } from '@angular/core';

import { auth } from 'firebase/app';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';


import { Observable, of } from 'rxjs';
import { switchMap, first, map } from 'rxjs/operators';


interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

user$: Observable<any[]>;

  constructor(
    // public afAuth: AngularFireAuth,
    // private afs: AngularFirestore,
    private router: Router,
  ) {
  }

}
