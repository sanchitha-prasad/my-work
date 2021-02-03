import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {ServiceService} from 'src/app/service/service.service';
import * as firebase from '../../../../node_modules/firebase';
// import {auth}  from  'firebase/app'; import { auth } from
// '../../../../node_modules/firebase';
import {ToastrService} from 'ngx-toastr';
declare var FB: any;
@Component(
    {selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.css']}
)
export class LoginComponent implements OnInit {
    data = 'sdsdsds';
    isSignedIn = false;
    constructor(
        private tostar : ToastrService,
        public service : ServiceService,
        private router : Router,
        public firbase : AngularFireAuth
    ) {}
    @Output()event = new EventEmitter<string>();
    ngOnInit(): void {}

    // tslint:disable-next-line:typedef
    async onsignin(email : string, password : string) {

        await this
            .service
            .signin(email, password)
            .then((res) => {

                const mail = email;

                const user = new FormData();
                user.append('access_key', '6808');
                user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
                user.append('user_signup', '1');
                user.append('name', '');
                user.append('email', email);
                user.append('profile', '');
                user.append('mobile', '0');
                user.append('type', 'email');
                user.append('fcm_id', '');
                user.append('refer_code', '0');
                user.append('friends_code', '0');
                user.append('ip_address', '0');
                user.append('status', '1');
                this
                    .service
                    .signup(user)
                    .subscribe((event => {

                        const userdetails = [event.data.name];

                        sessionStorage.setItem('userId', event.data.user_id);



                        this
                            .router
                            .navigate(['Examhub'], {
                                queryParams: {
                                    data: JSON.stringify(userdetails)
                                }
                            });

                    }), (err) => {
                        console.log(err);

                    });

            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                this
                    .tostar
                    .error(errorMessage);

            });
    }

    // tslint:disable-next-line:typedef
    async signWithGoogle() {

        await this
            .firbase
            .signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
            .then(res => {

                this
                    .event
                    .emit(this.data);
                console.log(res);
                const user = new FormData();
                user.append('access_key', '6808');
                user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
                user.append('user_signup', '1');
                user.append('name', res.user.displayName);
                user.append('email', res.user.email);
                user.append('profile', res.user.photoURL);
                user.append('mobile', '0');
                user.append('type', 'gmail');
                user.append('fcm_id', res.user.uid);
                user.append('refer_code', '0');
                user.append('friends_code', '0');
                user.append('ip_address', '0');
                user.append('status', '1');
                this
                    .service
                    .signup(user)
                    .subscribe((event => {

                        const userdetails: any = [event.data.name];
                        sessionStorage.setItem('userId', event.data.user_id);
                        this
                            .router
                            .navigate(['Examhub'], {
                                queryParams: {
                                    data: JSON.stringify(userdetails)
                                }
                            });

                    }), (err) => {
                        console.log(err);
                    });

                this
                    .service
                    .signupOl(user)
                    .subscribe((event => {}), (err) => {
                        console.log(err);

                    });

                this
                    .service
                    .signupSix(user)
                    .subscribe((event => {}), (err) => {
                        console.log(err);

                    });

            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

            });

    }
    facebook(): void {
        const provider = new firebase
            .default
            .auth
            .FacebookAuthProvider();

        this
            .firbase
            .signInWithPopup(new firebase.default.auth.FacebookAuthProvider())
            .then(res => {

                this
                    .event
                    .emit(this.data);
                const user = new FormData();
                user.append('access_key', '6808');
                user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
                user.append('user_signup', '1');
                user.append('name', res.user.displayName);
                user.append('email', res.user.email);
                user.append('profile', res.user.photoURL);
                user.append('mobile', '0');
                user.append('type', 'gmail');
                user.append('fcm_id', res.user.uid);
                user.append('refer_code', '0');
                user.append('friends_code', '0');
                user.append('ip_address', '0');
                user.append('status', '1');
                this
                    .service
                    .signup(user)
                    .subscribe((event => {

                        const userdetails: any = [event.data.name];
                        sessionStorage.setItem('userId', event.data.user_id);
                        this
                            .router
                            .navigate(['Examhub'], {
                                queryParams: {
                                    data: JSON.stringify(userdetails)
                                }
                            });

                    }), (err) => {
                        console.log(err);
                    });

                this
                    .service
                    .signupOl(user)
                    .subscribe((event => {}), (err) => {
                        console.log(err);

                    });

                this
                    .service
                    .signupSix(user)
                    .subscribe((event => {}), (err) => {
                        console.log(err);

                    });

            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }

    regster(): void {
        this
            .router
            .navigate(['Examhub/Signup']);
    }
    forgot(): void {
      this.router.navigate(['Examhub/ForgotPasssword']);
    }

}
