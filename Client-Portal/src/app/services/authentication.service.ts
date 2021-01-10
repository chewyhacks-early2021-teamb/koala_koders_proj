import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StringLiteral } from 'typescript';
@Injectable({
providedIn: 'root'
})

export class AuthenticationService {
userData: Observable<firebase.User>;
user_uid: string;
constructor(private route: Router, private angularFireAuth: AngularFireAuth) {
this.userData = angularFireAuth.authState;
}


/* Sign in */
SignIn(email: string, password: string, mode:string) {
this.angularFireAuth
.auth
.signInWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully logged in!');
this.route.navigate([mode]);
this.user_uid = res.user.uid;
})

.catch(err => {
console.log('Something is wrong:',err.message);
});

}

/* Sign out */
SignOut() {
this.angularFireAuth
.auth
.signOut();
}

}